window.addEventListener("scroll",function(){
    var nav2=document.querySelector("#nav2");
    nav2.classList.toggle("sticky",window.scrollY > 0);
  })