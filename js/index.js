const saveti=[
  "Spakujte se pametno i lagano",
  "Uvek imajte kopije dokumenata",
  "Upoznajte se sa lokalnim običajima",
  "Koristite offline mape",
  "Uživajte u trenutku i fotkajte"
];

const odrediIkonu=s=>{
  s=s.toLowerCase();
  if(s.includes("dokument")) return "📄";
  if(s.includes("mape")) return "🗺️";
  if(s.includes("fotk")) return "📸";
  if(s.includes("običaj")) return "🎎";
  if(s.includes("spakuj")) return "🎒";
  return "✈️";
};

const generisiSaveteHTML=lista=>{
  let html="<ul style='list-style:none;margin-top:20px;padding-left:0'>";
  lista.forEach(s=>{
    html+=`<li style="margin:10px 0;font-size:18px">${odrediIkonu(s)} ${s}</li>`;
  });
  return html+="</ul>";
};

document.addEventListener("DOMContentLoaded",()=>{
  const dugme=document.getElementById("prikaziSavete");
  const container=document.getElementById("saveti-container");

  dugme.addEventListener("click",()=>{
    container.innerHTML=generisiSaveteHTML(saveti);
    Object.assign(container.style,{
      backgroundColor:"#f0f8ff",
      padding:"20px",
      borderRadius:"8px",
      margin:"20px auto",
      maxWidth:"600px"
    });
    dugme.disabled=true;
    dugme.style.opacity="0.6";
    dugme.textContent="Saveti prikazani ✅";
  });
});
