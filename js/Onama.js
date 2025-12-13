
let vrednosti = ["Poverenje", "Kvalitet", "Iskustvo", "Održivost", "Inovacija"];


function generisiVrednostiHTML(lista) {
  let html = "<ul style='margin-top: 20px; list-style: none;'>";
  for (let i = 0; i < lista.length; i++) {
    let tekst = lista[i].toUpperCase(); 
    html += `<li style="font-size: 18px; margin: 10px;">🌟 ${tekst}</li>`;
  }
  html += "</ul>";
  return html;
}


document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("vrednostiBtn");

  btn.addEventListener("click", function () {
    const div = document.createElement("div");
    div.innerHTML = generisiVrednostiHTML(vrednosti);
    div.style.padding = "20px";
    div.style.backgroundColor = "#f3f9ff";
    div.style.borderRadius = "10px";
    div.style.margin = "0 auto 40px";
    div.style.maxWidth = "600px";
    div.style.textAlign = "left";

    document.body.insertBefore(div, document.querySelector("footer"));
    btn.disabled = true;
    btn.textContent = "Naše vrednosti su prikazane ✅";
  });

 
  btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "#0056b3";
    btn.style.color = "#fff";
  });

  btn.addEventListener("mouseout", function () {
    btn.style.backgroundColor = "";
    btn.style.color = "";
  });
});
