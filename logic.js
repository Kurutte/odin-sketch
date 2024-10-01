const container = document.querySelector(".container");

const grid = document.querySelector(".grid");

// TODO: Implement adding in "rows"
for(index = 0; index < 16*16; index++) {
    const newDiv = document.createElement("div");
    grid.appendChild(newDiv);
}

container.appendChild(grid);