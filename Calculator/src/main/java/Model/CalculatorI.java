package Model;

public interface CalculatorI {
    String getResult();
    void setResult(String Result);
    String getOperand1();
    String getOperand2();
    void setOperand1(String operand1);
    void setOperand2(String operand2);
    void add(String op1, String op2);
    void subtract(String op1, String op2);
    void multiply(String op1, String op2);
    void divide(String op1, String op2);
    void mod(String op1, String op2);
    void root(String op);
    void sqrt(String op);
    void inverse(String op);




}
