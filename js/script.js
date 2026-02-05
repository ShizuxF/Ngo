document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect()
    const x=e.clientX-r.left
    const y=e.clientY-r.top
    card.style.transform=
      `rotateX(${-(y-r.height/2)/20}deg)
       rotateY(${(x-r.width/2)/20}deg)`
  })
  card.addEventListener("mouseleave",()=>{
    card.style.transform="rotateX(0) rotateY(0)"
  })
})
