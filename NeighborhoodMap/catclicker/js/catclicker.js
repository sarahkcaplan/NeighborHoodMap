// MODEL
var model = {
    currentCat: '',
    catArray: [
      {
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
  ]
}

// OCTOPUS
function getListOfCats(){
  return model.catArray;
}

function getFirstCat(){
  return model.currentCat = model.catArray[0];
}

function getCatClickCount(currentCat){
  return model.catArray[currentCat].clickCount;
}

function getCatImage(currentCat){
  return model.catArray[currentCat].imageUrl;
}

function getCatName(currentCat){
  return model.catArray[currentCat].name;
}

function updateCatClickCount(currentCat){
  var count = document.getElementById("counter");
  count = parseInt(counter.textContent);
  count += 1;
  return model.catArray[currentCat].clickCount = count;
}

function getCurrentCat(){
  return model.currentCat;
}

//This is his funciton. I currently have this within showCatList(). cat is an object you pass in.
function setCurrentCat(cat){
  model.currentCat = cat;
}

function init(){
  showCatList();
  showCat(0);
}

// VIEW
function showCatList(){
  var ul = document.getElementById("cat-list");
  var cats = getListOfCats();
  for (var i = 0; i < cats.length; i++){
    var cat = cats[i];
    var li = document.createElement('li');
    li.textContent = cat.name;
    li.addEventListener("click", (function(cat){
      return function() {
        setCurrentCat(cat);
        showCat();
      };
    })(cat));
  }
}

function showCat(){
  var currentCat = model.getCurrentCat();
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

// //Click on cat in list to get current cat
// var li = document.getElementsByTagName('li');
// li.addEventListener("click", (function(cat){
//   return function() {
//     showCat(getCurrentCat(cat));
//   };
// }));

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