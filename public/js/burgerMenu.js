
/* ####################
    BURGER MENU
#####################*/

let burgerMenu = document.querySelector('../#tm-toggleNav');
let toggleMenu = document.querySelector('.tm-toggle');

function showToggle() { 
    if(burgerMenu.style.display == "block") {
        burgerMenu.style.display = "none";
    } else {
        burgerMenu.style.display = "block";
    }
 }

toggleMenu.addEventListener("click", showToggle);

/* ####################
    FIN BURGER MENU
#####################*/