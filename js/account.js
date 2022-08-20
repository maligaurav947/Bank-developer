const btnLogout = document.getElementById("btnlogout");
const sectionAccount = document.getElementById("account");

btnLogout.addEventListener("click", () => {
  sectionAccount.style.display = "none";
});

const btnLogin = document.getElementById("btnlogin");

btnLogin.addEventListener("click", () => {
  sectionAccount.style.display = "block";
});


function loan() {
  const loanInput = document.getElementById("loaninput").value;
  document.getElementById("balanceresult").innerText = loanInput;
  document.getElementById("blanceresulthidden").style.display = "block";
}

function send() {
  const sendMoney = document.getElementById("sendmoney").value;
  document.getElementById("balanceresultsend").innerText = sendMoney;
  document.getElementById("blanceresulthiddensend").style.display = "block";
}
