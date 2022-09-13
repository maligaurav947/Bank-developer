const loginaccount = document.getElementById("loginaccount");
const loginiconcross = document.getElementById("loginicon");
const account = document.getElementById("account");
const loginbtn = document.getElementById("loginbtn");
const logininputid = document.getElementById("logininputid");
const logininputpass = document.getElementById("logininputpass");
const itemname = document.getElementById("itemname");
const totaldigit = document.getElementById("totaldigit");
const ent1 = document.getElementById("ent1");
const ent2 = document.getElementById("ent2");
const ent3 = document.getElementById("ent3");
const ent4 = document.getElementById("ent4");
const ent5 = document.getElementById("ent5");
const ent6 = document.getElementById("ent6");
const ent7 = document.getElementById("ent7");

/*

*/

let id1blance = 741 + 1741 - 541 - 2140 + 2685 - 514 + 15514;
const id1 = {
  email: "maligaurav947@gmail.com",
  pass: "947",
  name: "Mali Gaurav",
  entiry1: "15,514",
  entiry2: "514",
  entiry3: "2,685",
  entiry4: "2,140",
  entiry5: "541",
  entiry6: "1,741",
  entiry7: "741",
  totalblance: `${Number(id1blance)}`,
};
let id2blance = 8541 + 26851 - 41 - 16854 + 5185 - 515 + 1114;
const id2 = {
  email: "JaydeepMahajan123@gmail.com",
  pass: "123",
  name: "Jaydeep Mahajan",
  entiry1: "15,114", //pluse
  entiry2: "515", //minus
  entiry3: "5,185", //pluse
  entiry4: "16,854", //minus
  entiry5: "41", //minus
  entiry6: "26,851", //pluse
  entiry7: "8,541", //pluse
  totalblance: `${Number(id2blance)}`,
};
let id3blance = 100151 + 51541 - 25541 - 1021 + 15141 - 241 + 13802;
const id3 = {
  email: "NikhilJoshi123@gmail.com",
  pass: "123",
  name: "Nikhil Joshi",
  entiry1: "13,802", //pluse
  entiry2: "241", //minus
  entiry3: "15,141", //pluse
  entiry4: "1,021", //minus
  entiry5: "25,541", //minus
  entiry6: "51,541", //pluse
  entiry7: "100,154", //pluse
  totalblance: `${Number(id3blance)}`,
};
let id4blance = 25414 + 2874 - 2151 - 3541 + 98414 - 10514 + 14511;
const id4 = {
  email: "Bhusahanmahanjan123@gmail.com",
  pass: "123",
  name: "Bhusahan Mahanjan",
  entiry1: "14,511", //pluse
  entiry2: "10,514", //minus
  entiry3: "98,415", //pluse
  entiry4: "3,541", //minus
  entiry5: "2,154", //minus
  entiry6: "2,874", //pluse
  entiry7: "25,141", //pluse
  totalblance: `${Number(id4blance)}`,
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
      ent1.innerText = `${id1.entiry1}`;
      ent2.innerText = `${id1.entiry2}`;
      ent3.innerText = `${id1.entiry3}`;
      ent4.innerText = `${id1.entiry4}`;
      ent5.innerText = `${id1.entiry5}`;
      ent6.innerText = `${id1.entiry6}`;
      ent7.innerText = `${id1.entiry7}`;
    }
  } else if (logininputid.value === id2.email) {
    if (logininputpass.value === id2.pass) {
      account.style.display = "grid";
      loginaccount.style.display = "none";
      itemname.innerText = `${id2.name}`;
      totaldigit.innerText = `${id2.totalblance}`;
      ent1.innerText = `${id2.entiry1}`;
      ent2.innerText = `${id2.entiry2}`;
      ent3.innerText = `${id2.entiry3}`;
      ent4.innerText = `${id2.entiry4}`;
      ent5.innerText = `${id2.entiry5}`;
      ent6.innerText = `${id2.entiry6}`;
      ent7.innerText = `${id2.entiry7}`;
    }
  } else if (logininputid.value === id3.email) {
    if (logininputpass.value === id3.pass) {
      account.style.display = "grid";
      loginaccount.style.display = "none";
      itemname.innerText = `${id3.name}`;
      totaldigit.innerText = `${id3.totalblance}`;
      ent1.innerText = `${id3.entiry1}`;
      ent2.innerText = `${id3.entiry2}`;
      ent3.innerText = `${id3.entiry3}`;
      ent4.innerText = `${id3.entiry4}`;
      ent5.innerText = `${id3.entiry5}`;
      ent6.innerText = `${id3.entiry6}`;
      ent7.innerText = `${id3.entiry7}`;
    }
  } else if (logininputid.value === id4.email) {
    if (logininputpass.value === id4.pass) {
      account.style.display = "grid";
      loginaccount.style.display = "none";
      itemname.innerText = `${id4.name}`;
      totaldigit.innerText = `${id4.totalblance}`;
      ent1.innerText = `${id4.entiry1}`;
      ent2.innerText = `${id4.entiry2}`;
      ent3.innerText = `${id4.entiry3}`;
      ent4.innerText = `${id4.entiry4}`;
      ent5.innerText = `${id4.entiry5}`;
      ent6.innerText = `${id4.entiry6}`;
      ent7.innerText = `${id4.entiry7}`;
    }
  }
});
