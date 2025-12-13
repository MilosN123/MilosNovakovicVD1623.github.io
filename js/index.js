// Niz saveta
const saveti = [
  "Spakujte se pametno i lagano",
  "Uvek imajte kopije dokumenata",
  "Upoznajte se sa lokalnim običajima",
  "Koristite offline mape",
  "Uživajte u trenutku i fotkajte"
];

// Funkcija koja određuje ikonu za svaki savet
function odrediIkonu(savet) {
  const s = savet.toLowerCase();
  if (s.includes("dokument")) return "📄";
  if (s.includes("mape")) return "🗺️";
  if (s.includes("fotk")) return "📸";
  if (s.includes("običaj")) return "🎎";
  if (s.includes("spakuj")) return "🎒";
  return "✈️";
}

// Funkcija koja generiše HTML listu saveta
function generisiSaveteHTML(lista) {
  let html = "<ul style='list-style: none; margin-top: 20px; padding-left: 0;'>";
  for (let savet of lista) {
    html += `<li style="margin: 10px 0; font-size: 18px;">${odrediIkonu(savet)} ${savet}</li>`;
  }
  html += "</ul>";
  return html;
}

// DOMContentLoaded da se osigura da su svi elementi učitani
document.addEventListener("DOMContentLoaded", () => {
  const dugme = document.getElementById("prikaziSavete");
  const container = document.getElementById("saveti-container");

  dugme.addEventListener("click", () => {
    container.innerHTML = generisiSaveteHTML(saveti);
    container.style.backgroundColor = "#f0f8ff";
    container.style.padding = "20px";
    container.style.borderRadius = "8px";
    container.style.margin = "20px auto";
    container.style.maxWidth = "600px";

    dugme.disabled = true;
    dugme.style.opacity = "0.6";
    dugme.textContent = "Saveti prikazani ✅";
  });
});
