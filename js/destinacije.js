const destinacije = ["Barselona", "Budimpešta", "Dubai", "Pariz", "Prag", "Moskva", "Istanbul", "Maldivi", "London", "Madrid"];

function filtrirajDestinacije(slovo) {
    return destinacije.filter(dest => dest.startsWith(slovo));
}

function brojSlova(naziv) {
    return naziv.replace(/\s/g, "").length;
}

console.log(filtrirajDestinacije("M"));
console.log(brojSlova("Maldivi"));

const lista = document.createElement("ul");
lista.classList.add("popularna-lista");
for (let i = 0; i < destinacije.length; i++) {
    const li = document.createElement("li");
    li.textContent = destinacije[i];
    lista.appendChild(li);
}

const poruka = document.createElement("p");
if (destinacije.includes("Pariz")) {
    poruka.textContent = "Pariz je među najpopularnijim destinacijama.";
} else {
    poruka.textContent = "Dodajte Pariz u listu destinacija.";
}

const destinacijeDiv = document.createElement("div");
destinacijeDiv.classList.add("popularne-destinacije");
destinacijeDiv.innerHTML = "<h3>Popularne destinacije:</h3>";
destinacijeDiv.appendChild(lista);
destinacijeDiv.appendChild(poruka);

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    if (footer) {
        document.body.insertBefore(destinacijeDiv, footer);
    } else {
        document.body.appendChild(destinacijeDiv);
    }

    document.body.insertBefore(brojDestinacija, destinacijeDiv);
    document.body.insertBefore(forma, destinacijeDiv);
});

document.querySelector("h1").addEventListener("click", function () {
    this.style.color = "crimson";
});

const slike = document.querySelectorAll("img");
slike.forEach(slika => {
    slika.addEventListener("mouseover", function () {
        this.style.border = "3px solid gold";
    });
    slika.addEventListener("mouseout", function () {
        this.style.border = "none";
    });
});

const forma = document.createElement("form");
forma.innerHTML = `
    <input type="text" id="ime" placeholder="Unesite destinaciju">
    <button type="submit">Dodaj</button>
`;
forma.classList.add("forma-destinacije");

forma.addEventListener("submit", function (e) {
    e.preventDefault();
    const unos = document.getElementById("ime").value.trim();
    if (unos.length > 0) {
        destinacije.push(unos);
        const nova = document.createElement("li");
        nova.textContent = unos;
        lista.appendChild(nova);
        brojDestinacija.innerHTML = `<h4>Ukupno destinacija: ${destinacije.length}</h4>`;
    }
});

const velikaSlova = destinacije.map(d => d.toUpperCase());
console.log(velikaSlova);

const sortirane = [...destinacije].sort();
console.log(sortirane);

const brojDestinacija = document.createElement("div");
brojDestinacija.innerHTML = `<h4>Ukupno destinacija: ${destinacije.length}</h4>`;
brojDestinacija.classList.add("broj-destinacija");
