/* query selectors */
const gridContainerSelector = document.querySelector('#grid-container');
const headerSelector = document.querySelector('#header');
const optionsSelector = document.querySelector('#options');

const defaultColor = "black";
const defaultGrid = 16;
let color = defaultColor;

gridMaker(defaultGrid);

function gridMaker(num) {
    gridContainerSelector.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainerSelector.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    let gridArea = num * num;

    for (let i = 0; i < gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        gridContainerSelector.appendChild(div);
        div.addEventListener("mouseover", draw);
    };
};

function draw() {
    this.style.backgroundColor = `${color}`;
}

function newGrid() {
    gridContainerSelector.innerHTML = "";
    newGridNum = prompt("Enter new Grid Dimension", "16");
    gridMaker(newGridNum);
}

function whatIfItWasPurple() {
    color = "purple";
};

function blackColor() {
    color = "black"
}