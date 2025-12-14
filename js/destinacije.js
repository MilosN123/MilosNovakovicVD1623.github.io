const destinacije=["Barselona","Budimpešta","Dubai","Pariz","Prag","Moskva","Istanbul","Maldivi","London","Madrid"];

const filtrirajDestinacije=slovo=>destinacije.filter(d=>d.startsWith(slovo));
const brojSlova=naziv=>naziv.replace(/\s/g,"").length;

console.log(filtrirajDestinacije("M"));
console.log(brojSlova("Maldivi"));

const lista=document.createElement("ul");
lista.className="popularna-lista";
destinacije.forEach(d=>{
  const li=document.createElement("li");
  li.textContent=d;
  lista.appendChild(li);
});

const poruka=document.createElement("p");
poruka.textContent=destinacije.includes("Pariz")
  ?"Pariz je među najpopularnijim destinacijama."
  :"Dodajte Pariz u listu destinacija.";

const destinacijeDiv=document.createElement("div");
destinacijeDiv.className="popularne-destinacije";
destinacijeDiv.innerHTML="<h3>Popularne destinacije:</h3>";
destinacijeDiv.append(lista,poruka);

const brojDestinacija=document.createElement("div");
brojDestinacija.className="broj-destinacija";
brojDestinacija.innerHTML=`<h4>Ukupno destinacija: ${destinacije.length}</h4>`;

const forma=document.createElement("form");
forma.className="forma-destinacije";
forma.innerHTML=`<input type="text" id="ime" placeholder="Unesite destinaciju"><button type="submit">Dodaj</button>`;

forma.addEventListener("submit",e=>{
  e.preventDefault();
  const unos=document.getElementById("ime").value.trim();
  if(unos){
    destinacije.push(unos);
    const li=document.createElement("li");
    li.textContent=unos;
    lista.appendChild(li);
    brojDestinacija.innerHTML=`<h4>Ukupno destinacija: ${destinacije.length}</h4>`;
  }
});

document.addEventListener("DOMContentLoaded",()=>{
  const footer=document.querySelector("footer");
  document.body.insertBefore(brojDestinacija,footer||null);
  document.body.insertBefore(forma,footer||null);
  document.body.insertBefore(destinacijeDiv,footer||null);
});

document.querySelector("h1")?.addEventListener("click",e=>{
  e.target.style.color="crimson";
});

document.querySelectorAll("img").forEach(img=>{
  img.addEventListener("mouseover",()=>img.style.border="3px solid gold");
  img.addEventListener("mouseout",()=>img.style.border="none");
});

console.log(destinacije.map(d=>d.toUpperCase()));
console.log([...destinacije].sort());
