// MODEL
var currentCat = ''
var catArray = [{
    name: 'Bella',
    clickCount: 0,
    imageUrl: 'images/bella.jpg'
  },
  {
    name: 'Charles',
    clickCount: 0,
    imageUrl: 'images/charles.jpg'
  },
  {
    name: 'Loretta',
    clickCount: 0,
    imageUrl: 'images/jack.jpg'
  },
  {
    name: 'Tyler',
    clickCount: 0,
    imageUrl:'images/Tyler.jpg'
  }
  ];

// OCTOPUS
function getListOfCats(){
  catArray;
}

function getFirstCat(){
  currentCat = catArray[0];
}

function getCatClickCount(currentCat){
//might not need this one. might refactor and collapse into updateCatClickCount
  catArray[currentCat].clickCount;
}

function updateCatClickCount(currentCat){
  var count document.getElementById("counter");
  count = parseInt(counter.textContent);
  count += 1;
  catArray[currentCat].clickCount = count;
}

function getCurrentCat(){

}

function init(){

}

// VIEW
function catCountBella(){
  var photobella = document.getElementById("clicker-bella");
  var counterbella = document.getElementById("counter-bella");
  countbella = parseInt(counterbella.textContent);
  countbella += 1;
  counterbella.innerHTML = countbella;
}

var photobella = document.getElementById("clicker-bella");
photobella.addEventListener("click", catCountBella);