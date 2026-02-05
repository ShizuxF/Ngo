let isUrdu=false;

document.getElementById("langToggle").onclick=()=>{
  isUrdu=!isUrdu;
  document.getElementById("langToggle").innerText=isUrdu?"English":"اردو";
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText=isUrdu?el.dataset.ur:el.dataset.en;
  });
  document.body.style.direction=isUrdu?"rtl":"ltr";
};
