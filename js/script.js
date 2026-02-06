document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mouseenter",()=>{
    card.style.transform="translateY(-8px)";
  });
  card.addEventListener("mouseleave",()=>{
    card.style.transform="translateY(0)";
  });
});
<script>
function showJazz() {
  document.getElementById("jazz").style.display = "block";
  document.getElementById("bank").style.display = "none";
}

function showBank() {
  document.getElementById("bank").style.display = "block";
  document.getElementById("jazz").style.display = "none";
}
</script>
