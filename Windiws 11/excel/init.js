let cellsContainer = document.querySelector(".cells");

let sheetsDB = [];
let db; // points to current DB
let visitedCells; // points to current visited cells

function initCells() {
  let cellsContent = '<div class="top-left-cell"></div>';
  cellsContent += '<div class="top-row">';
  for (let j = 0; j < 26; j++) {
    cellsContent += `<div class="top-row-cell">${String.fromCharCode(
      65 + j
    )}</div>`;
  }
  cellsContent += "</div>";
  cellsContent += '<div class="left-col">';
  for (let j = 0; j < 100; j++) {
    cellsContent += `<div class="left-col-cell">${j + 1}</div>`;
  }
  cellsContent += "</div>";
  cellsContent += '<div class="all-cells">';
  for (let i = 0; i < 100; i++) {
    cellsContent += '<div class="row">';
    for (let j = 0; j < 26; j++) {
      cellsContent += `<div class="cell" contenteditable="true" rowid="${i}" colid="${j}"></div>`;
    }
    cellsContent += "</div>";
  }
  cellsContent += "</div";
  cellsContainer.innerHTML = cellsContent;
}

function initDB() {
  let newDB = [];
  for (let i = 0; i < 100; i++) {
    let row = [];
    for (let j = 0; j < 26; j++) {
      // i=1
      // j=1   =>   B2
      let cellName = String.fromCharCode(65 + j) + (i + 1);
      let cellObject = {
        name: cellName,
        value: "",
        formula: "",
        childrens: [],
        parents: [],
        visited: false,
      };
      row.push(cellObject);
    }
    newDB.push(row);
  }
  let dbObject = { db: newDB, visitedCells: [] };
  sheetsDB.push(dbObject);
  db = newDB;
  visitedCells = dbObject.visitedCells;
}

initCells();
initDB();