import { Component, OnInit } from "@angular/core";
import { CalculatorI } from "./CalculatorInterfaces";
import { HttpClientModule } from "@angular/common/http";
import { CalculatorService } from "./calculator.service";
import { ResultI, ExpressionI } from "./CalculatorInterfaces";


@Component({
    selector: 'app-calculator',
    templateUrl: './Calculator.component.html',
    styleUrls: ['./Calculator.component.css']
})

export class Calculator implements OnInit{

   
    expressionArray: string[] = ["", "", ""];

    expression : ExpressionI = {
        operand1 : this.expressionArray[0],
        operand2 : this.expressionArray[1],
        operator : this.expressionArray[2],
    }

    res: ResultI = {
        result : ""
    };
    
    calc : CalculatorI =  {
        eqn : "",
        zero: false,
    }
    monitorOut: string = "";

    unary : boolean = false;
    lastUnaryResult : string = "";

    opn1 : boolean = true;

    eqlpressed : boolean = false;
    currentOpr : string = "";
   
    constructor(private calcSerive: CalculatorService) {}

    ngOnInit(){

    }   


    monitorOutput(value : string){
        this.monitorOut = value;

    }


    calculateExpression(){
        this.calcSerive.postExpression({
            operand1 : this.expressionArray[0],
            operand2 : this.expressionArray[1],
            operator : this.expressionArray[2],
        }).subscribe((data : ResultI) => {if(data.result == "Cannot divide by zero") {this.monitorOutput(data.result)} else {this.monitorOutput(data.result); this.expressionArray[0] = data.result; this.expression.operand1 = data.result}});
    }

    clearResult(){
        this.calcSerive.clearResult().subscribe();
    }

    restart(){
        this.expressionArray[0] = "";
        this.expressionArray[1] = "";
        this.expressionArray[2] = "";
        this.expression.operand1 = "";
        this.expression.operand2 = "";
        this.expression.operator = "";
    }
    
    

    readExpression(input : string) : void{
       
        let eqnTemp = this.calc.eqn;
        let zero = this.calc.zero

        this.unary = false;
        if(this.eqlpressed == true){
            this.restart();
            this.eqlpressed = false;
        }

        else if(eqnTemp.length + 1 > 61){
            eqnTemp = "";
        }
    
        if(input == '.'){
            
            
            if(eqnTemp.indexOf(".") == -1){
                eqnTemp = eqnTemp.concat(input);

            }
        }
        else if(input == '-'){

            if(eqnTemp.indexOf("-") == -1){
                eqnTemp = "-".concat(eqnTemp);
            }
            else{
                eqnTemp = eqnTemp.slice(1, eqnTemp.length)
            }
        }

        else if(input == '⌫'){
    
            eqnTemp = eqnTemp.slice(0, eqnTemp.length - 1);
                       
        }
        else if(input == "C" || input == "CE"){
            zero = false;
            eqnTemp = "";
            this.clearResult();
            this.restart();
            this.res.result = "";
            this.eqlpressed = false;
    
        }
        else{
            if(input == '0' && zero == false){
                eqnTemp = eqnTemp.concat(input)
                zero = true;
            }
            else if(input != '0' && (input >= "1" && input <= "9")){
                eqnTemp = eqnTemp.concat(input)
                zero = false;
            }
        }
        this.calc.eqn = eqnTemp;
        this.calc.zero = zero;
        this.monitorOutput(this.calc.eqn);
    }



    evalauteExpression(input : string){

    
        if(input == "%"){
            let temp = this.expressionArray[2];
            this.expressionArray[1] = this.calc.eqn;
            this.expressionArray[2] = input;
            this.calculateExpression();
            this.expressionArray[2] = temp;
            this.calc.eqn = "";
            this.expressionArray[1] = "";
            
        }
        else{
            if(this.unary){
                this.expressionArray[0] = this.lastUnaryResult;
                this.expressionArray[2] = input;
                this.expression.operator = this.expressionArray[2];
                this.unary = false;
                this.calc.eqn = "";
            }
            if(this.expressionArray[0] == "" && this.expressionArray[1] == ""){
    
                this.expressionArray[0] = this.calc.eqn;
                this.expressionArray[2] = input;  
                this.expression.operator = this.expressionArray[2];
                this.calc.eqn = "";
                this.monitorOutput(this.expressionArray[0]);
                this.eqlpressed = false;    
            }
            else if(this.expressionArray[1] == ""){
    
                if(input == "=" && !this.eqlpressed){
                    this.expressionArray[1] = this.calc.eqn;
                    this.calculateExpression();
                    this.calc.eqn = "";
                    this.eqlpressed = true;
                }
                else{
                    if(this.calc.eqn == ""){
                        this.expressionArray[2] = input;
                        this.expression.operator = input;
                    }
                    else{
                        this.expressionArray[1] = this.calc.eqn;
                        this.calculateExpression();
                        this.currentOpr = input;
                        this.expressionArray[2] = input;
                        this.expression.operator = this.currentOpr;
                        this.calc.eqn = "";
                        this.expressionArray[1] = "";
                        this.eqlpressed = false;
                       
                    }
                    
                }   

            }

        }
        
        this.expression.operand1 = this.expressionArray[0];
        this.expression.operand2 = this.expressionArray[1];
        this.calc.zero = false;
        

 
    }  

    unaryEvaluation(input : string){
        this.calcSerive.postExpression({
            operand1 : this.monitorOut,
            operand2 : "",
            operator : input,
        }) 
        .subscribe((data : ResultI) => {this.monitorOutput(data.result); this.calc.eqn = data.result;this.calc.eqn = "";this.lastUnaryResult = data.result;})
        this.restart();
        this.unary = true;
         
    }
   
}