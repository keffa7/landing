

const openMenu = document.querySelector("#menu-icon");
const closeMenu = document.querySelector("#btn-close");
const menu = document.querySelector("#menu");


openMenu.addEventListener("click", function(){
    
   menu.classList.add('menu-active');
   
    
});

closeMenu.addEventListener("click", function(){
    
   menu.classList.remove('menu-active');
    
});
