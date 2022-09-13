const loginaccount = document.getElementById("loginaccount");
const loginiconcross = document.getElementById("loginicon");
const account = document.getElementById("account");
const loginbtn = document.getElementById("loginbtn");
const logininputid = document.getElementById("logininputid");
const logininputpass = document.getElementById("logininputpass");

const itemname = document.getElementById("itemname");
const totaldigit = document.getElementById("totaldigit");

const id1 = {
  email: "maligaurav947@gmail.com",
  pass: "947",
  name: "Mali Gaurav",
  totalblance: "1,521",
};
const id2 = {
  email: "JaydeepMahajan123@gmail.com",
  pass: "123",
  name: "Jaydeep Mahajan",
  totalblance: "984",
};

const id3 = {
  email: "NikhilJoshi123@gmail.com",
  pass: "123",
  name: "Nikhil Joshi",
  totalblance: "1,985",
};

const id4 = {
  email: "BhusahanMahanjan123@gmail.com",
  pass: "123",
  name: "Bhusahan Mahanjan",
  totalblance: "15,085",
};

loginiconcross.addEventListener("click", () => {
  loginaccount.style.display = "none";
});
loginbtn.addEventListener("click", () => {
  if (logininputid.value === id1.email) {
    if (logininputpass.value === id1.pass) {
      account.style.display = "grid";
      loginaccount.style.display = "none";
      itemname.innerText = `${id1.name}`;
      totaldigit.innerText = `${id1.totalblance}`;
    }
  } else if (logininputid.value === id2.email) {
    if (logininputpass.value === id2.pass) {
      account.style.display = "grid";
      loginaccount.style.display = "none";
      itemname.innerText = `${id2.name}`;
      totaldigit.innerText = `${id2.totalblance}`;
    }
  } else if (logininputid.value === id3.email) {
    if (logininputpass.value === id3.pass) {
      account.style.display = "grid";
      loginaccount.style.display = "none";
      itemname.innerText = `${id3.name}`;
      totaldigit.innerText = `${id3.totalblance}`;
    }
  } else if (logininputid.value === id4.email) {
    if (logininputpass.value === id4.pass) {
      account.style.display = "grid";
      loginaccount.style.display = "none";
      itemname.innerText = `${id4.name}`;
      totaldigit.innerText = `${id4.totalblance}`;
    }
  }
});
