
const openMenu = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#btn-close");
const menu = document.querySelector("#menu");


openMenu.addEventListener("click", function(){
    
    menu.style.animation = "animation 300ms ease-in-out"
    menu.style.transform = "translate(-50%, -50%) scale(1)";
   
    
});

closeMenu.addEventListener("click", function(){
    
    menu.style.transform = "translate(50%, 50%) scale(0)";
    
});