//* Nested loop

let symbol = prompt("Enter a symbol to use");
let rows = prompt("Enter # of rows");
let columns = prompt("Enter # of columns");

for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}