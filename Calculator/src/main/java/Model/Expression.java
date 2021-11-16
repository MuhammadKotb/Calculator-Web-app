package Model;

public class Expression implements ExpressionI {

    private String operand1;
    private String operand2;
    private String operator;


    public String getOperand1() {
        return this.operand1;
    }


    public String getOperand2() {
        return this.operand2;
    }


    public String getOperator() {
        return this.operator;
    }


    public void setOperand1(String operand1) {
        this.operand1 = operand1;
    }


    public void setOperand2(String operand2) {
        this.operand2 = operand2;

    }


    public void setOperator(String operator) {
        this.operator = operator;

    }
}
