// Scroll Reveal
const reveals=document.querySelectorAll(".reveal");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// Parallax
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".parallax").forEach(sec=>{
    sec.style.backgroundPositionY = window.scrollY * 0.3 + "px";
  });
});
