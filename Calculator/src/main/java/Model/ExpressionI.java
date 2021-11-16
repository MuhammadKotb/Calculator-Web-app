package Model;

public interface ExpressionI {
    String getOperand1();
    String getOperand2();
    String getOperator();
    void setOperand1(String operand1);
    void setOperand2(String operand2);
    void setOperator(String operator);
}
