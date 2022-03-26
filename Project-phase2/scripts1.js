//scripts for problems
function resetFindInGrid() {
    //set tbNumberToFind to blank
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    tbNumberToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}

function resetFindInList() {
     //set tbTextToFind to blank
    let tbTextToFind = document.getElementById("tbTextToFind");
    tbTextToFind.value = '';

    //unhighlight spans
    let spans = document.getElementsByTagName('span');
    console.log("spans: ", spans);
    for (let index = 0; index < spans.length; index++) {
        spans[index].classList.remove('spanHighlighted');
    }
}



function reloadPage() {
    window.location.reload();
    return false;
}


function findInGrid() {
    let found = false;
    let message;
    let tbNumberToFind = document.getElementById("tbNumberToFind");
    let numberInGrid = tbNumberToFind.value;
    console.log("number: ", numberInGrid);

    try {
        if (numberInGrid < 0) {
            throw "Please enter a valid number";
        }
        let spans = document.getElementsByTagName('span');
        console.log("spans: ", spans);

        for (let index = 0; index < spans.length; index++) {
            console.log("spans[index]: ", spans[index]);
            console.log("spans[index].innerText: ", spans[index].innerText);
            console.log("parseInt(spans[index].innerText) == numberToFind: ", parseInt(spans[index].innerText) ==
                numberInGrid);
            
            spans[index].classList.remove('spanHighlighted');

            if (spans[index].innerText == numberInGrid) {
                console.log("spans[index].classList: ", spans[index].classList);
                spans[index].classList.add('spanHighlighted');
                found = true;
            }
        }
        if (!found) {
            message = `The text ${numberInGrid} could not be found!`;
        }
    } catch (err) {
        message = err;
    } finally {
        if (message) {
            alert(message);
        }
    }
}
   

function findInList() {
 let found = false;
 let tbtextToFind = document.getElementById("tbTextToFind");
 let textToFind = tbtextToFind.value;

 if (typeof textToFind === "undefined" || textToFind == '') {
     alert('Please enter a value to find!');
     return;
 }

 console.log("number", textToFind);

 let spans = document.getElementsByTagName('span');

 console.log("spans: ", spans);

 for (let index = 0; index < spans.length; index++) {
     console.log("spans[index]: ", spans[index]);
     console.log("spans[index].innerText: ", spans[index].innerText);
     console.log("parseInt(spans[index].innerText) == textToFind: ", parseInt(spans[index].innerText) ==
         textToFind);

     spans[index].classList.remove('spanHighlighted');

     if (spans[index].innerText == textToFind) {
         console.log("spans[index].classList: ", spans[index].classList);

         spans[index].classList.add('spanHighlighted');
         found = true;
     }
 }

 if (!found) {
     alert(`The text ${textToFind} could not be found!`);
    }
}

var SortSpans = function (div1, div2) {
 let span1 = div1.children[0];
 let span2 = div2.children[0];

 if (span1.innerText < span2.innerText) {
     return -1;
 } else {
     return 1;
 }
}

var sortSpansInDiv = function (div1, div2) {
    let span1 = div1.children[0];
    let span2 = div2.children[0];

    if (span1.innerText < span2.innerText) {
        return -1;
    } else {
        return 1;
    }
}

function sortIt() {
    sortItVer4();
}

function sortItVer1() {
    let newRow = document.createElement('div');
    newRow.id = "row0";
    newRow.className = "row";
    let row0 = document.getElementById("row0");

    console.log(row0);
    let pDiv = row0.parentNode;
    
    console.log(pDiv);

    console.log("using sortItVer1()");
    let resultsRow = document.getElementById("resultsRow");
    let arrayOfColumns = [];

    const listOfColumnDivElements = document.querySelectorAll("div.column");

    console.log("listOfColumnDivElements: ", listOfColumnDivElements);
  
    for (let index = 0; index < listOfColumnDivElements.length; index++) {
        arrayOfColumns.push(listOfColumnDivElements[index]);
        console.log("listOfColumnDivElements[index].children[0]: ", listOfColumnDivElements[index].children[0].innerText);
    }

    console.log("arrayOfColumns pre-sorted: ", arrayOfColumns);
    arrayOfColumns.sort(sortSpansInDiv);
    console.log("arrayOfColumns sorted: ", arrayOfColumns);

    for (let index = 0; index < arrayOfColumns.length; index++) {
        newRow.appendChild(arrayOfColumns[index]);
        console.log("newRow: ", newRow);
    }

    row0.replaceWith(newRow);
}

function sortItVer4() {
    console.log("using sortItVer4()");

    let newRow = document.createElement('div');
    newRow.id = "row0";
    newRow.className = "row";

    let row0 = document.getElementById("row0");
    console.log(row0);

    let arrayOfColumns = [];

    const listOfColumnDivElements = document.querySelectorAll("div.column");
    console.log("listOfColumnDivElements: ", listOfColumnDivElements);

    for (let index = 0; index < listOfColumnDivElements.length; index++) {
        arrayOfColumns.push(listOfColumnDivElements[index]);
        console.log("listOfColumnDivElements[index].children[0]: ", listOfColumnDivElements[index].children[0].innerText);
    }

    console.log("arrayOfColumns pre-sorted: ", arrayOfColumns);
    

    arrayOfColumns.sort(sortSpansInDiv);
    console.log("arrayOfColumns sorted: ", arrayOfColumns);

    for (let index = 0; index < arrayOfColumns.length; index++) {
        newRow.appendChild(arrayOfColumns[index]);
        console.log("newRow: ", newRow);
    }

    row0.replaceWith(newRow);
}