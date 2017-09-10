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

function getCatClickCount(){
  return model.catArray[model.currentCat].clickCount;
}

function getCatImage(){
  return model.catArray[model.currentCat].imageUrl;
}

function getCatName(){
  return model.catArray[model.currentCat].name;
}

function updateCatClickCount(){
  var counter = document.getElementById("counter");
  count = parseInt(counter.textContent);
  count += 1;
  model.catArray[model.currentCat].clickCount = count;
  showCat();
}

function getCurrentCat(){
  return model.currentCat
}

//This is his funciton. I currently have this within showCatList(). cat is an object you pass in.

function setCurrentCat(i){
  model.currentCat = i;
}

function init(){
  model.currentCat = 0;
  showCatList();
  showCat();
}

// VIEW
function showCatList(){
  var ul = document.getElementById("cat-list");
  var cats = getListOfCats();
  for (var i = 0; i < cats.length; i++){
    var cat = cats[i];
    var li = document.createElement('li');
    li.textContent = cat.name;
    li.addEventListener("click", (function(i){
      return function() {
        setCurrentCat(i);
        showCat();
      };
    })(i));
    ul.appendChild(li);
  }
}

function showCat(){
  var currentCat = getCurrentCat();
  var catimg = document.getElementById("cat-image");
  var catname = document.getElementById("cat-name")
  var catclickcount = document.getElementById("counter")
  catimg.src = getCatImage();
  catname.innerHTML = getCatName();
  catclickcount.innerHTML = model.catArray[model.currentCat].clickCount;
}


//Tie the clicker element to the octopus updateCatClickCount function
function catClick(){
  var clicker = document.getElementById("clicker");
  updateCatClickCount();
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
