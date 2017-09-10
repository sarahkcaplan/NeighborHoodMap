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
  var octopus = {
    getCatNames: function() {
      var catNameList = catArray
    }

    init: function() {
      view1.init();
    }
  };

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