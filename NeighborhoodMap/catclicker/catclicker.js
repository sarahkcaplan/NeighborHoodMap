$(function(){

  var model = {
    init: function(){
      //not sure what to init
    }
  },
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
  ]
})



//Array of objects. Objects are cat photo information
[{
  name: 'Cat',
  clickCount: 0,
  imageUrl:
}
]


app loads
create list
list view populates with cats

change current cat in model

click on cat picture
-track clicking
-first in model
-then in view

click on list
- change model
-current cat reset
-tell view to rerender


view 1 = list of cats

view 2 = cat details





// //onClick() is a listener for click events registered using addEventListener()

// function onClick() {
//     var counter = document.getElementById("counter");
//     counter.firstChild.nodeValue += 1;
//   }


// var el = document.getElementById("cat");
// el.addEventListener("click", onClick);

