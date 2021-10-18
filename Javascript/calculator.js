class Calculator {
    constructor(varX, operand, varY) {
        this.varX = varX;
        this.operand = operand;
        this.varY = varY;
    }

    setVarX(x) {
        this.varX = x;
    }

    getVarX() {
        return this.varX;
    }

    setOperator(operator) {
        this.operand = operator;
    }

    getOperator() {
        return this.operand;
    }

    setVarY(y) {
        this.VarY = y;
    }
}
//////////////////////////////////////////////////////
//                Begin calculation                 //
//////////////////////////////////////////////////////

// Get equation elements from user input
const varX = prompt("Value of x");
const operand = prompt("Operator");
const varY = prompt("Value of y");

// Create calculator object
const calculator = new Calculator(varX, operand, varY);

// Print entered equation elements
document.write("You have entered : " + calculator.getVarX + " " + calculator.getOperator + " " + calculator.getVarY);