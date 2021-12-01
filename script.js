const frm = document.querySelector("form");

const prenom = document.querySelector("#idPrenom");
const nom = document.querySelector("#idNom");
const mail = document.querySelector("#idMail");
const avatar = document.querySelector("#idAvatar");
const age = document.querySelector("#idAge");

const im = document.querySelector(".finalD img");

const btYes = document.querySelector(".buttonYes");
const btNo = document.querySelector(".buttonno");

const mess = document.querySelector(".inscription");
const imPub = document.querySelector("#pub");
let cnt = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  // validation des champs
  if (
    prenom.value != "" &&
    nom.value != "" &&
    mail.value != "" &&
    avatar.value != "" &&
    age.value != ""
  ) {
    let res = document.querySelectorAll(".finalG p");

    res[0].innerText = "Votre nom complet: " + prenom.value + " " + nom.value;
    res[1].innerText = `Votre adresse Email : ${mail.value} `;
    res[2].innerText = `Votre age : ${age.value} ans `;

    im.setAttribute("src", avatar.value);

    document.querySelector("footer").style.display = "flex";
    mess.style.display = "none";
  }
});

// Inscription validée
btYes.addEventListener("click", (e) => {
  document.querySelector("footer").style.display = "none";
  document.querySelector(".formulaire").style.display = "none";
  document.querySelector(".etape").style.display = "none";
  mess.style.display = "block";

  mess.innerText = "Votre inscription a bien été enregistrée";
});

// Inscription déclinée
btNo.addEventListener("click", (e) => {
  document.querySelector("footer").style.display = "none";

  document.querySelector(".etape").style.display = "none";
  mess.style.display = "block";
  mess.innerText = "En attente de vos informations";

  // vide le form
  const frm = document.querySelectorAll(".f1");
  for (let i = 0; i < frm.length; i++) frm[i].value = "";
});

setInterval(function () {
  if (cnt == 3) cnt = 0;
  cnt++;
  let imagePath = `assets\\sport0${cnt}.jpg`;

  imPub.setAttribute("src", imagePath);
}, 3000);
