
let page = document.getElementById('pixelPainter');
let currentColor = 'white';
console.log(currentColor);

let pictureGrid = document.createElement('div')
page.appendChild(pictureGrid);

for (let i = 0; i < 30; i++) {
  let gridRow = document.createElement('div');
  gridRow.style.height = '15px';
  gridRow.style.width = '70%';
  pictureGrid.appendChild(gridRow);

  for (let j = 0; j < 33; j++) {
    let gridCell = document.createElement('div');
    gridCell.className = 'putColorHere'
    gridCell.style.border = '1px solid black'
    gridCell.style.height = '15px';
    gridCell.style.width = '2%';
    gridCell.style.display = "inline-block";
    gridCell.addEventListener("click",timeToColor);
    gridCell.addEventListener('mouseover',timeToColor);
    gridRow.appendChild(gridCell);
  }
}
let showColorSwatch = document.createElement('div');
showColorSwatch.id = 'moveRight'
showColorSwatch.className = 'alignRight'
page.appendChild(showColorSwatch);

for (let i = 0; i < 5; i++) {
  let colorSwatchRow = document.createElement('div');
  colorSwatchRow.className = "colorSwatchRow"
  colorSwatchRow.style.height = '15px';
  colorSwatchRow.style.width = '50%';
  showColorSwatch.appendChild(colorSwatchRow);

  for (let j = 0; j < 5; j++) {
    let colorSwatchCell = document.createElement('div');
    colorSwatchCell.className = "colorSwatchCell"
    colorSwatchCell.style.border = '1px solid black'
    colorSwatchCell.style.height = '15px';
    colorSwatchCell.style.width = '2%';
    colorSwatchCell.style.display = "inline-block";
    colorSwatchCell.addEventListener('click', pickYourColor);
    colorSwatchRow.appendChild(colorSwatchCell);
  }
}

var colorArray = ['#eca1a6', '#40E0D0', '#00BFFF', '#EE82EE', '#FFFFFF', '#2F4F4F', '#000000', '#8B4513', '#008080', '#00FF7F', '#FFFF00', '#FFA500', '#DCDCDC', '#C0C0C0', '#FFD700', '#FF69B4', '#8B008B', '#87CEFA', '#228B22', '#FF7F50', '#FFE4E1', '#F5DEB3', '#00CED1', '#000080', '#483D8B']
function placeColor(arr) {
  for (let a = 0; a < arr.length; a++) {
    let pickGrid = document.getElementsByClassName('colorSwatchCell');
    pickGrid[a].style.backgroundColor = arr[a];
  }
}
placeColor(colorArray);

function pickYourColor(event) {
  currentColor = event.target.style.backgroundColor;
}

function timeToColor(){
event.target.style.backgroundColor = currentColor;
}
function paintHere(){
  let gridPaintEvents= document.className("putColorHere")
  if(gridPaintEvents.event.target === 'click'){
    return timeToColor()
  }else if(gridPaintEvents.event.target === 'mouseover'){
    return timeToColor()
  }
}


let clearButton = document.createElement('div');
clearButton.id = 'clear'
clearButton.className = 'eraseAndClearButton'
clearButton.innerHTML = 'Clear';
clearButton.addEventListener('click', clearWholeGrid)
page.appendChild(clearButton);

function clearWholeGrid() {
  document.getElementsByClassName('putColorHere').style.backgroundColor = 'white';
}

let eraseButton = document.createElement('div');
eraseButton.id = 'erase';
eraseButton.className = 'eraseAndClearButton'
eraseButton.innerHTML = 'Erase';
eraseButton.addEventListener('click', eraseGrid);
page.appendChild(eraseButton);

function eraseGrid() {
  console.log('goodbye');
}


