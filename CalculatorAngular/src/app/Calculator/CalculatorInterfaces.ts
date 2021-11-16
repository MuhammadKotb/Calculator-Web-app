
export interface CalculatorI {
    eqn: string;
    zero: boolean;
} 

export interface ExpressionI {
    operand1 : string;
    operand2 : string;
    operator : string;
} 

export interface ResultI {
    result : string;
}