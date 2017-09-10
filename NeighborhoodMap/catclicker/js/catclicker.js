
function catCount(){
  var photo = document.getElementById("clicker");
  var counter = document.getElementById("counter");
  count = parseInt(counter.textContent);
  count += 1;
  counter.innerHTML = count;
}

var photo = document.getElementById("clicker");
photo.addEventListener("click", catCount)