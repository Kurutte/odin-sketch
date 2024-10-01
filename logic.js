const container = document.querySelector(".container");

const grid = document.querySelector(".grid");

for(index = 0; index < 16; index++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for(rowIndex = 0; rowIndex < 16; rowIndex++) {
        const newDiv = document.createElement("div");
        row.appendChild(newDiv);
    }

    grid.appendChild(row);
}

container.appendChild(grid);