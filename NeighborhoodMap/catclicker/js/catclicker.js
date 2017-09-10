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

function getCurrentCat(cat){
  currentCat = cat;
}

function init(){
  showCatList();
  showCat(getFirstCat());
}

// VIEW
function showCatList(){
  //this will probably have the closure issue
  var ul = document.getElementByTagName("ul");
  for (var i = 0; i < catArray.length; i++){
    var cat = catArray[i];
    var li = document.createElement('li');
    li.textContent = cat.name
    ul.innerHTML = li.textContent;
  }
}

function showCat(currentCat){
  var catimg = document.getElementById("cat-image");
  var catname = document.getElementById("cat-name")
  var catclickcount = document.getElementById("counter")
  catimg.src = getCatImage(currentCat);
  catname.innerHTML = getCatName(currentCat);
  catclickcount.innerHTML = getCatClickCount(currentCat);
}


//Tie the clicker element to the octopus updateCatClickCount function
function catClick(currentCat){
  var clicker = document.getElementById("clicker");
  updateCatClickCount(currentCat);
}

//Click on cat picture to increment count
var clicker = document.getElementById("clicker");
clicker.addEventListener("click", catClick);

//Click on cat in list to get current cat
li.addEventListener("click", (function(cat){
  return function() {
    showCat(getCurrentCat(cat));
  };
}));

init();


// function catCountBella(){
//   var photobella = document.getElementById("clicker-bella");
//   var counterbella = document.getElementById("counter-bella");
//   countbella = parseInt(counterbella.textContent);
//   countbella += 1;
//   counterbella.innerHTML = countbella;
// }

// var photobella = document.getElementById("clicker-bella");
// photobella.addEventListener("click", catCountBella);