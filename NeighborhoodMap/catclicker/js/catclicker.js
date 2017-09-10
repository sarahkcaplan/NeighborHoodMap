// MODEL
var catArray = [{
    name: 'Bella',
    clickCount: 0
    imageUrl:'images/bella.jpg'
  },
  {
    name: 'Charles',
    clickCount: 0
    imageUrl: 'images/charles.jpg'
  },
  {
    name: 'Loretta',
    clickCount: 0
    imageUrl: 'images/jack.jpg'
  },
  {
    name: 'Tyler',
    clickCount: 0
    imageUrl:'images/Tyler.jpg'
  }
  ];

// OCTOPUS
function getListOfCats(){

}

function getFirstCat(){

}

function getCatClickCount(){
//might not need this one. might refactor and collapse into updateCatClickCount
}

function updateCatClickCount(){

}

function getCat(){

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