const container = document.querySelector(".container");
const colorNotif = document.querySelector("#colorNotif");
const sizeNotif = document.querySelector("#sizeNotif");
const reset = document.querySelector("#reset");
reset.addEventListener('click', resetBoard);
const colors = document.querySelector("#colors");
colors.addEventListener('click', useRandomColors);
const onlyBlack = document.querySelector("#black");
onlyBlack.addEventListener('click', useBlackOnly);
let applyRandomColors = false;
let gridSize = 16;

function resetBoard() {
    gridSize = parseInt(prompt("How big do you want your new grid?", "1-100"));
    while(gridSize > 100 || gridSize < 0 || !Number.isInteger(gridSize)) {
        gridSize = parseInt(prompt("Not a valid size. Please only use Integers and a number 1-100", "1-100"));
    }

    const grid = document.querySelector(".grid");
    container.removeChild(grid);
    createGrid(gridSize);
    updateSizeNotif();
}

function colorSquare() {
    let newOpacity = parseFloat(this.style.opacity);
    if(newOpacity < 1) {
        newOpacity += .1;
    }
    this.style.backgroundColor = getRandomColor();
    this.style.opacity = "" + newOpacity + "";
}

function getRandomColor() {
    let red = 0, green = 0, blue = 0;

    if(applyRandomColors) {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
    }

    let colorString = "rgb(" + red + " " + green + " " + blue + ")";
    return colorString;
}

function useRandomColors() {
    applyRandomColors = true;
    alert("Noted! Random Colors Here We GO!");
    updateColorNotif();
}

function useBlackOnly() {
    applyRandomColors = false;
    alert("Noted! Only Black From Now On!");
    updateColorNotif();
}

function updateColorNotif() {
    if(applyRandomColors) {
        colorNotif.textContent = "Current Color Setting: Random Colors";
    }
    else {
        colorNotif.textContent = "Current Color Setting: Black Only";
    }
}

function updateSizeNotif() {
    sizeNotif.textContent = "Current size: " + gridSize + " x " + gridSize;
}

function createGrid(gridSize) {
    const grid = document.createElement("div");
    grid.classList.add("grid");

    for(index = 0; index < gridSize; index++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for(rowIndex = 0; rowIndex < gridSize; rowIndex++) {
            const newDiv = document.createElement("div");
            newDiv.style.opacity = "0";
            newDiv.addEventListener('mouseenter', colorSquare);
            row.appendChild(newDiv);
        }

        grid.appendChild(row);
    }

    container.appendChild(grid);
}

createGrid(gridSize);
updateColorNotif();
updateSizeNotif();

