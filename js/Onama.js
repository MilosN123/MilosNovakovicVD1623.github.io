const vrednosti=["Poverenje","Kvalitet","Iskustvo","Održivost","Inovacija"];

const generisiVrednostiHTML=lista=>{
  let html="<ul style='margin-top:20px;list-style:none'>";
  lista.forEach(v=>{
    html+=`<li style="font-size:18px;margin:10px">🌟 ${v.toUpperCase()}</li>`;
  });
  return html+="</ul>";
};

document.addEventListener("DOMContentLoaded",()=>{
  const btn=document.getElementById("vrednostiBtn");

  btn.addEventListener("click",()=>{
    const div=document.createElement("div");
    div.innerHTML=generisiVrednostiHTML(vrednosti);

    Object.assign(div.style,{
      padding:"20px",
      backgroundColor:"#f3f9ff",
      borderRadius:"10px",
      margin:"0 auto 40px",
      maxWidth:"600px",
      textAlign:"left"
    });

    document.body.insertBefore(div,document.querySelector("footer"));
    btn.disabled=true;
    btn.textContent="Naše vrednosti su prikazane ✅";
  });

  btn.addEventListener("mouseover",()=>{
    btn.style.backgroundColor="#0056b3";
    btn.style.color="#fff";
  });

  btn.addEventListener("mouseout",()=>{
    btn.style.backgroundColor="";
    btn.style.color="";
  });
});

