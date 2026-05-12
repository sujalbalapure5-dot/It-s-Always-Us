/* ========================= */
/* SAVE AS: script.js */
/* ========================= */

function scrollToTimeline(){
  document.getElementById("timeline").scrollIntoView({
    behavior:"smooth"
  });
}

const fadeElements=document.querySelectorAll(".fade");

const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

fadeElements.forEach((el)=>{
  observer.observe(el);
});

function showFinal(){
  document.getElementById("finalScreen").classList.remove("hidden");
}

function moveNo(button){

  const x=Math.random()*300-150;
  const y=Math.random()*300-150;

  button.style.transform=`translate(${x}px,${y}px)`;
}
