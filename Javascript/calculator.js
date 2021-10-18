class Calculator {
    constructor(varX, operand, varY) {
        this.varX = varX;
        this.operand = operand;
        this.varY = varY;
    }

    setVarX(varX) {
        this.varX = varX;
    }

    getVarX() {
        return this.varX;
    }

    setOperand(operand) {
        this.operand = operand;
    }

    getOperand() {
        return this.operand;
    }

    setVarY(varY) {
        this.VarY = varY;
    }
}
//////////////////////////////////////////////////////
//                Begin calculation                 //
//////////////////////////////////////////////////////

// Get equation elements from user input
const x = prompt("Value of x");
const operator = prompt("Operator");
const y = prompt("Value of y");

// Create calculator object
const calculator = new Calculator(x, operator, y);

// Print entered equation elements
document.write("You have entered : " + calculator.getVarX + " " + calculator.getOperator + " " + calculator.getVarY);