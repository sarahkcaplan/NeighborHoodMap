console.log("This script is running:) You got this, girl!")

function catCount(){
  var photo = document.getElementById("clicker");
  var counter = document.getElementById("counter");
  console.log("You clicked the kitty...")
  count = 0;
  count += 1;
  console.log("Count: ", count);
  counter.innerHTML = count;
  console.log("Count: ", count);
}

var photo = document.getElementById("clicker");
photo.addEventListener("click", catCount)