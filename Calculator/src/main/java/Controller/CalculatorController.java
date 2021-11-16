package Controller;


import Model.*;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

@RestController
@Component
@CrossOrigin(origins = "http://localhost:4200")
public class CalculatorController {

    Calculator calculator = new Calculator();
    Result result = new Result();




    @PostMapping("/result")
    public Result postExpression(@RequestBody Expression expression){

        if(expression.getOperator().equals("+")){
            calculator.add(expression.getOperand1(), expression.getOperand2());
        }
        else if(expression.getOperator().equals("×")){
            calculator.multiply(expression.getOperand1(), expression.getOperand2());

        }
        else if(expression.getOperator().equals("÷")){
            calculator.divide(expression.getOperand1(), expression.getOperand2());

        }
        else if(expression.getOperator().equals("-")){
            calculator.subtract(expression.getOperand1(), expression.getOperand2());

        }
        else if(expression.getOperator().equals("%")){
            calculator.mod(expression.getOperand1(), expression.getOperand2());

        }
        else if(expression.getOperand2() == "" && expression.getOperator().equals("x²")){
            calculator.sqrt(expression.getOperand1());
        }
        else if(expression.getOperand2() == "" && expression.getOperator().equals("√")){
            calculator.root(expression.getOperand1());
        }
        else if(expression.getOperand2() == "" && expression.getOperator().equals("1/x")){
            calculator.inverse(expression.getOperand1());
        }

        result.setResult(calculator.getResult());

        System.out.println(result.getResult());


        return result;
    }

    @PostMapping("/clear")
    public void deleteResult(){
        result.setResult("");
    }






}
