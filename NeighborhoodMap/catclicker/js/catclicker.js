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
  return catArray;
}

function getFirstCat(){
  return currentCat = catArray[0];
}

function getCatClickCount(currentCat){
//might not need this one. might refactor and collapse into updateCatClickCount
  return catArray[currentCat].clickCount;
}

function getCatImage(currentCat){
  return catArray[currentCat].imageUrl;
}

function getCatName(currentCat){
  return catArray[currentCat].name;
}

function updateCatClickCount(currentCat){
  var count = document.getElementById("counter");
  count = parseInt(counter.textContent);
  count += 1;
  return catArray[currentCat].clickCount = count;
}

function getCurrentCat(){

}

function init(){

}

// VIEW
function showCatList(){

}

function showFirstCat(){

}

function showCat(currentCat){
  var catimg = document.getElementById("cat-image");
  var catname = document.getElementById("cat-name")
  var catclickcount = document.getElementById("counter")
  catimg.src = getCatImage(currentCat);
  catname.innerHTML = getCatName(currentCat);
  catclickcount.innerHTML = getCatClickCount(currentCat);
}

function showCat(currentCat){
  var catimg = document.getElementById("cat-image");
  catimg.src = getCatImage(currentCat);
}

function showCatClickCount(){
  var clickcount = document.getElementById("counter");

}


function catCountBella(){
  var photobella = document.getElementById("clicker-bella");
  var counterbella = document.getElementById("counter-bella");
  countbella = parseInt(counterbella.textContent);
  countbella += 1;
  counterbella.innerHTML = countbella;
}

var photobella = document.getElementById("clicker-bella");
photobella.addEventListener("click", catCountBella);