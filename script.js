/* query selectors */
const gridContainerSelector = document.querySelector('#grid-container');
const headerSelector = document.querySelector('#header');
const optionsSelector = document.querySelector('#options');

let gridDimensions = prompt("Enter a number stoopid", "1");
gridMaker(gridDimensions);

function gridMaker(num) {
    gridContainerSelector.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
    gridContainerSelector.style.gridTemplateRows = `repeat(${gridDimensions}, 1fr)`;

    let gridArea = num * num;

    for (let i = 0; i < gridArea; i++) {
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        gridContainerSelector.appendChild(div);
    };
};