const voiti = document.getElementById("voiti");
const sinfi = document.getElementById("sinfi");

sinfi.addEventListener("click", function () {
  document.getElementById("headers").style.display = "none";
  document.getElementById("class").style.display = "block";
});

voiti.addEventListener("click", function () {
  document.getElementById("class").style.display = "none";
  document.getElementById("headers").style.display = "block";
});
