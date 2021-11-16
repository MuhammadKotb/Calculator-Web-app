package Model;
public class Calculator implements CalculatorI  {
    private String operand1;
    private String operand2;
    private boolean unaryOp;
    private String result;

  


    public String getResult() {
        return this.result;
    }


    public void setResult(String result) {
        this.result = result;
    }




    public String getOperand1() {
        return this.operand1;
    }

    public String getOperand2() {
        return this.operand2;
    }


    public void setOperand1(String operand1) {
        this.operand1 = operand1;
    }

    public void setOperand2(String operand2) {
        this.operand2 = operand2;
    }



    public void add(String op1, String op2) {
        double op1D = Double.parseDouble(op1);

        double op2D = Double.parseDouble(op2);

        double value = (Double.sum(op1D, op2D));
        if((op1.indexOf(".") == -1) &&  (op2.indexOf(".") == -1)){
            this.result = String.valueOf((int)value);

        }
        else{
            this.result = String.valueOf(value);
        }



    }
    public void subtract(String op1, String op2) {
        double op1D = Double.parseDouble(op1);

        double op2D = Double.parseDouble(op2);


        double value = op1D - op2D;
        if((op1.indexOf(".") == -1) &&  (op2.indexOf(".") == -1)){
            this.result = String.valueOf((int)value);

        }
        else{
            this.result = String.valueOf(value);
        }

    }
    public void multiply(String op1, String op2) {
        double op1D = Double.parseDouble(op1);

        double op2D = Double.parseDouble(op2);


        double value = op1D * op2D;
        if((op1.indexOf(".") == -1) &&  (op2.indexOf(".") == -1)){
            this.result = String.valueOf((int)value);

        }
        else{
            this.result = String.valueOf(value);
        }
    }
    public void divide(String op1, String op2) {
        double op1D = Double.parseDouble(op1);

        double op2D = Double.parseDouble(op2);



        double value = op1D / op2D;
        this.result = String.valueOf(value);

        if(op2.equals("0")){
            this.result = "Cannot divide by zero";
        }
    }
    public void mod(String op1, String op2) {
        double value;
        double op1D = Double.parseDouble(op1);

        if(op2 == ""){

            value = (op1D / 100) * op1D;
        }

        else{

            double op2D = Double.parseDouble(op2);
            value = (op2D / 100) * op1D;

        }

       this.result = String.valueOf(value);
    }
    public void root(String op) {

        double value = Double.parseDouble(op);
        value = Math.sqrt(value);

        this.result = String.valueOf(value);

    }
    public void sqrt(String op) {

        double value = Double.parseDouble(op);
        value = value*value;

        if(op.indexOf(".") == -1){
            this.result = String.valueOf((int)value);
        }
        else{
            this.result = String.valueOf(value);
        }

    }
    public void inverse(String op) {

        double value = Double.parseDouble(op);
        value = 1 / value;

        this.result = String.valueOf(value);

    }


}
