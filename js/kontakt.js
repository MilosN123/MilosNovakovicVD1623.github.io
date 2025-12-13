
let destinacijeDiv = document.createElement("div");
destinacijeDiv.style.marginTop = "30px";
destinacijeDiv.innerHTML = "<h3>Popularne destinacije:</h3><ul>" +
  filtrirane.map(dest => `<li>${dest}</li>`).join("") +
  "</ul>";


document.addEventListener("DOMContentLoaded", function () {
  let footer = document.querySelector("footer");
  if (footer) {
    document.body.insertBefore(destinacijeDiv, footer);
  } else {
    document.body.appendChild(destinacijeDiv); 
  }
});

function validacijaPolja(vrednost) {
  return vrednost.trim().length > 0 && vrednost.length >= 3;
}


function generisiPoruku(ime) {
  let velikoIme = ime.charAt(0).toUpperCase() + ime.slice(1); 
  return `Hvala na poruci, ${velikoIme}!`;
}

const forma = document.querySelector("form");
const imeInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const porukaInput = document.getElementById("message");


forma.addEventListener("submit", function (e) {
  e.preventDefault();

  let ime = imeInput.value;
  let email = emailInput.value;
  let poruka = porukaInput.value;

  if (!validacijaPolja(ime) || !validacijaPolja(email) || !validacijaPolja(poruka)) {
    alert("Sva polja moraju imati najmanje 3 karaktera.");
    return;
  }

  forma.style.border = "2px solid green";
  forma.style.backgroundColor = "#e0ffe0";

  let porukaDiv = document.createElement("div");
  porukaDiv.style.marginTop = "20px";
  porukaDiv.style.padding = "10px";
  porukaDiv.style.backgroundColor = "#dff0d8";
  porukaDiv.textContent = generisiPoruku(ime);

  document.body.appendChild(porukaDiv);
});

imeInput.addEventListener("mouseover", function () {
  imeInput.style.backgroundColor = "#e6f7ff";
});

imeInput.addEventListener("mouseout", function () {
  imeInput.style.backgroundColor = "#fff";
});
