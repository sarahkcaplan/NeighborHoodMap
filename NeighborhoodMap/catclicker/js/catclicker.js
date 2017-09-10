console.log("This script is running:) You got this, girl!")

function catCount(){
  var photo = document.getElementById("clicker");
  var count = document.getElementById("counter");
  console.log("You clicked the kitty...")
  count += 1
}

var photo = document.getElementById("clicker");
photo.addEventListener("click", catCount)