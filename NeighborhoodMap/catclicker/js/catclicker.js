
function catCountBella(){
  var photobella = document.getElementById("clicker-bella");
  var counterbella = document.getElementById("counter-bella");
  countbella = parseInt(counterbella.textContent);
  countbella += 1;
  counterbella.innerHTML = countbella;
}

var photobella = document.getElementById("clicker-bella");
photobella.addEventListener("click", catCountBella);


function catCountJack(){
  var photojack = document.getElementById("clicker-jack");
  var counterjack = document.getElementById("counter-jack");
  countjack = parseInt(counterjack.textContent);
  countjack += 1;
  counterjack.innerHTML = countjack;
}

var photojack = document.getElementById("clicker-jack");
photojack.addEventListener("click", catCountJack);


function catCountCharles(){
  var photocharles = document.getElementById("clicker-charles");
  var countercharles = document.getElementById("counter-charles");
  countcharles = parseInt(countercharles.textContent);
  countcharles += 1;
  countercharles.innerHTML = countcharles;
}

var photocharles = document.getElementById("clicker-charles");
photocharles.addEventListener("click", catCountCharles);