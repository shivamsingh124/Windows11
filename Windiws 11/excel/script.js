let topLeftCell = document.querySelector(".top-left-cell");
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let address = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let allCells = document.querySelectorAll(".cell");
let lastSelectedCell;

cellsContainer.addEventListener("scroll", function (e) {
  let topOffset = e.target.scrollTop;
  let leftOffset = e.target.scrollLeft;

  topRow.style.top = topOffset + "px";
  topLeftCell.style.top = topOffset + "px";
  topLeftCell.style.left = leftOffset + "px";
  leftCol.style.left = leftOffset + "px";
});

formulaInput.addEventListener("blur", function (e) {
  let formula = e.target.value;
  if (formula) {
    let cellObject = getCellObjectFromElement(lastSelectedCell);
    if (cellObject.formula != formula) {
      deleteFormula(cellObject);
    }

    let calculatedValue = solveFormula(formula, cellObject);
    // UI Update
    lastSelectedCell.textContent = calculatedValue;
    // DB Update
    cellObject.value = calculatedValue;
    cellObject.formula = formula;

    //childrens update
    updateChildrens(cellObject.childrens);
  }
});

function attachClickAndBlurEventOnCell() {
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", function (e) {
      let cellObject = getCellObjectFromElement(e.target);
      address.value = cellObject.name;
      formulaInput.value = cellObject.formula;
    });

    allCells[i].addEventListener("blur", function (e) {
      lastSelectedCell = e.target;
      // logic to save this value in db
      let cellValueFromUI = e.target.textContent;
      if (cellValueFromUI) {
        let cellObject = getCellObjectFromElement(e.target);

        // check if the given cell has a formula on it
        if (cellObject.formula && cellValueFromUI != cellObject.value) {
          deleteFormula(cellObject);
          formulaInput.value = "";
        }

        // cellObject ki value update !!
        cellObject.value = cellValueFromUI;

        //   update childrens of the current updated cell
        updateChildrens(cellObject.childrens);

        // handle visited Cells
        let rowId = lastSelectedCell.getAttribute("rowid");
        let colId = lastSelectedCell.getAttribute("colid");
        if (!cellObject.visited) {
          visitedCells.push({ rowId, colId });
          cellObject.visited = true;
        }
      }
    });
  }
}
attachClickAndBlurEventOnCell();

function deleteFormula(cellObject) {
  cellObject.formula = "";
  for (let i = 0; i < cellObject.parents.length; i++) {
    let parentName = cellObject.parents[i];
    // A1
    let parentCellObject = getCellObjectFromName(parentName);
    let updatedChildrens = parentCellObject.childrens.filter(function (
      childName
    ) {
      if (childName == cellObject.name) {
        return false;
      }
      return true;
    });
    parentCellObject.childrens = updatedChildrens;
  }
  cellObject.parents = [];
}

function solveFormula(formula, selfCellObject) {
  // tip : implement infix evalutaion
  // ( A1 + A2 ) => ( 10 + 20 );
  let formulaComps = formula.split(" ");
  // ["(" , "A1" , "+" , "A2" , ")"];
  // find valid component
  for (let i = 0; i < formulaComps.length; i++) {
    let fComp = formulaComps[i];
    if (
      (fComp[0] >= "A" && fComp[0] <= "Z") ||
      (fComp[0] >= "a" && fComp <= "z")
    ) {
      // A1 || A2
      // fComp = A1
      let parentCellObject = getCellObjectFromName(fComp);
      let value = parentCellObject.value;
      if (selfCellObject) {
        //add yourself as a child of parentCellObject
        parentCellObject.childrens.push(selfCellObject.name);
        // update your parents
        selfCellObject.parents.push(parentCellObject.name);
      }

      formula = formula.replace(fComp, value);
    }
  }
  // ( 10 + 20 ) => infix evaluation
  let calculatedValue = eval(formula);
  return calculatedValue;
}

function getCellObjectFromElement(element) {
  let rowId = element.getAttribute("rowid");
  let colId = element.getAttribute("colid");
  return db[rowId][colId];
}

function getCellObjectFromName(name) {
  // A100
  let colId = name.charCodeAt(0) - 65;
  let rowId = Number(name.substring(1)) - 1;
  return db[rowId][colId];
}

function updateChildrens(childrens) {
  for (let i = 0; i < childrens.length; i++) {
    let child = childrens[i];
    //B1
    let childCellObject = getCellObjectFromName(child);
    let updatedValueOfChild = solveFormula(childCellObject.formula);
    //db update
    childCellObject.value = updatedValueOfChild;
    //ui update
    let colId = child.charCodeAt(0) - 65;
    let rowId = Number(child.substring(1)) - 1;
    document.querySelector(
      `div[rowid="${rowId}"][colid="${colId}"]`
    ).textContent = updatedValueOfChild;
    //recursive call
    updateChildrens(childCellObject.childrens);
  }
}