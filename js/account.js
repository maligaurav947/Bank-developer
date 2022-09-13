const loginaccount = document.getElementById("loginaccount");
const loginiconcross = document.getElementById("loginicon");
const account = document.getElementById("account");
const loginbtn = document.getElementById("loginbtn");

loginiconcross.addEventListener("click", () => {
  loginaccount.style.display = "none";
});
loginbtn.addEventListener("click", () => {
  account.style.display = "grid";
  loginaccount.style.display = "none";
});
