const container = document.querySelector(".container");
const reset = document.querySelector("button");
reset.addEventListener('click', resetBoard);

function resetBoard() {
    let gridSize = parseInt(prompt("How big do you want your new grid?", "1-100"));
    while(gridSize > 100 || gridSize < 0 || !Number.isInteger(gridSize)) {
        gridSize = parseInt(prompt("Not a valid size. Please only use Integers and a number 1-100", "1-100"));
    }

    const grid = document.querySelector(".grid");
    container.removeChild(grid);
    createGrid(gridSize);
}

function colorSquare() {
    this.style.backgroundColor = "black";
}

function createGrid(gridSize) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    for(index = 0; index < gridSize; index++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for(rowIndex = 0; rowIndex < gridSize; rowIndex++) {
            const newDiv = document.createElement("div");
            newDiv.addEventListener('mouseenter', colorSquare);
            row.appendChild(newDiv);
        }

        grid.appendChild(row);
    }

    container.appendChild(grid);
}

createGrid(16);

