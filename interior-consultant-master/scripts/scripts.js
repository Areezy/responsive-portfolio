const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const header = document.querySelector(".header");
let menuToggled = false;

const toggleMenu = () => {
    
    const activeElements = document.querySelectorAll(".active");
    const inactiveElements = document.querySelectorAll(".inactive");
    
    menuToggled = menuToggled ? false : true;
    
    if (menuToggled === true) {
        header.style.display = "block";
    }else {
        header.style.display = "flex";
    }
    
    
    for (let elements of activeElements) {
        elements.classList.add("inactive");
        elements.classList.remove("active");
    }

        
    for (let elements of inactiveElements) {
      elements.classList.remove("inactive");
      elements.classList.add("active");
    }

};




menu.addEventListener("click", toggleMenu, false);
closeMenu.addEventListener("click", toggleMenu, false);