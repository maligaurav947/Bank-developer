const loader = document.getElementById("loader");
const menubtn = document.getElementById("baricon");
const bariconcross = document.getElementById("bariconcross");
const navbar = document.getElementById("navbar");
function loaderfun() {
  loader.style.display = "none";
}
menubtn.addEventListener("click", () => {
  navbar.style.display = "grid";
  bariconcross.style.display = "grid";
});
bariconcross.addEventListener("click", () => {
  navbar.style.display = "none";
  bariconcross.style.display = "none";
});
