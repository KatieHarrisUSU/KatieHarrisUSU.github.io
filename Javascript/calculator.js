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

    getVarY() {
        return this.varY;
    }

    calculate() {
        // Check if the variables are numbers and handle
        // if they are not 
        if(isNaN(this.varX) || isNaN(this.varY)) {
            return "Wrong input number";
        } 
        
        // Calculate equations as long as the operand
        // given is valid
        switch(this.operand) {
            case '+': return (Number(this.varX) + Number(this.varY));
            case '-': return (Number(this.varX) - Number(this.varY));
            case '*': return (Number(this.varX) * Number(this.varY));
            case '/': return (Number(this.varX) / Number(this.varY));
            case '%': return (Number(this.varX) % Number(this.varY));
            default: return "Computation error";
        }
    }
}
//////////////////////////////////////////////////////
//                Begin calculation                 //
//////////////////////////////////////////////////////

let repeat = true;
let equations = [];
let answers = [];

// Ask for equation(s) from user
while (repeat) {
    // Get equation elements from user input
    const x = prompt("Value of x");
    const operator = prompt("Operator");
    const y = prompt("Value of y");

    // Create calculator object
    const calculator = new Calculator(x, operator, y);

    // Add new calculator object to list of equations to calculate
    equations.push(calculator);

    // Add another equation?
    repeat = confirm("Continue?");
}

// Compute answers for equations
equations.forEach((equation) => {
    answers.push(equation.calculate())
})

// Print equation and answer table
var rows = answers.length;
var columns = 4;
var min = 0;
var max = 0;
var total = 0;
var totals = [];
var average = 0;
var n = 0;

// Get div in HTML body where we want to print the table
const tableParentElement = document.getElementById("calculator-output");

// Create table element
var table = document.createElement("table");
table.setAttribute("id", "calculator-table"); // Set the id for styling purposes

// Add table header
var headerRow = document.createElement("tr");
headerRow.setAttribute("id", "calculator-table-header")
var xHeader = document.createElement("th"); // Insert new header cell
xHeader.innerHTML = "x"; // set new cell's text content
headerRow.appendChild(xHeader); // append header cell to header row
var opHeader = document.createElement("th");
opHeader.innerHTML = "op";
headerRow.appendChild(opHeader);
var yHeader = document.createElement("th");
yHeader.innerHTML = "y";
headerRow.appendChild(yHeader);
var resultHeader = document.createElement("th");
resultHeader.innerHTML = "result";
headerRow.appendChild(resultHeader);
table.appendChild(headerRow); // Append header to table

// Create and populate the equation rows of the table
// as well as calculating stats for overview table
for (var i = 0; i < rows; i++) {
    var tableRow = document.createElement("tr");

    for (var j = 0; j < columns; j++) {
        var tableCell = document.createElement("td");
        tableCell.setAttribute("id", "calculator-table-cell")
        
        // Depending on the column, print the correct values
        switch (j) {
            case 0: 
                tableCell.textContent = equations[i].getVarX(); // Set cell content
                tableRow.appendChild(tableCell); // Append cell to table row
                break;
            case 1: 
                tableCell.textContent = equations[i].getOperand(); 
                tableCell.style.backgroundColor = '#dfdbff';
                tableRow.appendChild(tableCell);
                break;
            case 2: 
                tableCell.textContent = equations[i].getVarY(); 
                tableRow.appendChild(tableCell);
                break;
            case 3: 
                var result = answers[i];
                if (isNaN(result)) {
                    tableCell.textContent = result;
                }
                else if((result % 1) === 0) {
                    tableCell.textContent = result;
                }
                else {
                    tableCell.textContent = Number(result).toPrecision(5);
                }
                tableRow.appendChild(tableCell);

                // Overview stats collection
                if (!isNaN(answers[i])) {
                    total += answers[i]; // Update total
                    n += 1;

                    // Keep track of number results
                    // for min and max
                    totals.push(Number(answers[i]))
                }

                break;
            default: console.log("table cell problem");
        }
        // Calculate average stat
        average = total / n;

        // Calculate min and max stats
        min = Math.min(...totals);
        max = Math.max(...totals);

        // Round stats to a reasonable number of values
        if ((Number(min) % 1) != 0) {
            min = Number(min).toPrecision(5);
        }

        if ((Number(max) % 1) != 0) {
            max = Number(max).toPrecision(5);
        }

        if ((Number(average) % 1) != 0) {
            average = Number(average).toPrecision(5);
        }
    }
    // Append created row to table
    table.appendChild(tableRow);
}

// Append table to selected div in HTML body
tableParentElement.appendChild(table);

// Create overview table element
var overviewTable = document.createElement("table");
overviewTable.setAttribute("id", "calculator-table"); // Set the id for styling purposes

// Add table header
var overviewHeaderRow = document.createElement("tr");
overviewHeaderRow.setAttribute("id", "calculator-table-header")
var minHeader = document.createElement("th"); // Insert new header cell
minHeader.innerHTML = "Min"; // set new cell's text content
overviewHeaderRow.appendChild(minHeader); // append header cell to header row
var maxHeader = document.createElement("th");
maxHeader.innerHTML = "Max";
overviewHeaderRow.appendChild(maxHeader);
var averageHeader = document.createElement("th");
averageHeader.innerHTML = "Average";
overviewHeaderRow.appendChild(averageHeader);
var totalHeader = document.createElement("th");
totalHeader.innerHTML = "Total";
overviewHeaderRow.appendChild(totalHeader);
overviewTable.appendChild(overviewHeaderRow); // Append header to table

// Add table contents
var overviewTableRow = document.createElement("tr");
var minCell = document.createElement("td"); // Insert new table cell
minCell.setAttribute("id", "calculator-table-cell")
minCell.innerHTML = min; // set new cell's text content
overviewTableRow.appendChild(minCell); // Append cell to row
var maxCell = document.createElement("td"); 
maxCell.setAttribute("id", "calculator-table-cell")
maxCell.innerHTML = max; 
overviewTableRow.appendChild(maxCell); // Append cell to row
var averageCell = document.createElement("td");
averageCell.setAttribute("id", "calculator-table-cell") 
averageCell.innerHTML = average; 
overviewTableRow.appendChild(averageCell); // Append cell to row
var totalCell = document.createElement("td"); 
totalCell.setAttribute("id", "calculator-table-cell")
totalCell.innerHTML = total; 
overviewTableRow.appendChild(totalCell); // Append cell to row
overviewTable.appendChild(overviewTableRow); // Append row to table

// Append table to selected div in HTML body
const overviewTableParentElement = document.getElementById("calculator-overview");
overviewTableParentElement.appendChild(overviewTable);