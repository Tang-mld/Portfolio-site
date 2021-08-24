/* ####################
       CAROUSSEL
#####################*/ 

/* ####################
       VARIABLES
#####################*/ 

// Flèche de droite et flèche de gauche 
let rightArrow = document.querySelector("#tm-carousel-1 .tm-right-arrow");
let leftArrow = document.querySelector("#tm-carousel-1 .tm-left-arrow");

// Liste de tous les écrans du caroussel
let screenStore = document.querySelectorAll("#tm-carousel-1 .tm-carousel-screen");
let numOfScreens = screenStore.length;

// Liste de tous les circleStore
let circleStore = document.querySelectorAll("#tm-carousel-1 .tm-circle-container .tm-circle");

// Ciblage de l'écran principale
let currentScreen = 0;

// Est en animation ou non
let inAnim = false;

// Temps d'animation
let animTime = 3000;

/* ####################
    FIN VARIABLES
#####################*/  


// Trier la position de départ
sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);

// Trier la position du cercle
highlightCircle(circleStore[0]);

// Au click sur la flèche de droite
rightArrow.addEventListener("click", () => {
    startAnim("right");
});

// Au click sur la flèche de gauche
leftArrow.addEventListener("click", () => {
    startAnim("left");
});


// Lancer l'animation soit vers la gauche, soit vers la droite
function startAnim(direction) {
    if(!inAnim) {
        inAnim = true;
        if(direction === "right") {
            moveRight();
            highlightCircle(circleStore[currentScreen + 1], "right");
        } else if (direction === "left") {
            moveLeft();
            highlightCircle(circleStore[currentScreen - 1], "left");
        } else {
            isAnim = false;
            return
        }
    }
}


// Bouger à droite
function moveRight() {
    if(currentScreen < numOfScreens - 1) {
    toLeft(screenStore[currentScreen]);
    comeRight(screenStore[currentScreen + 1]);
    setTimeout(() => {
        inAnim = false;
        currentScreen ++;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
    }, animTime)
    } else {
        toLeft(screenStore[currentScreen]);
        comeRight(screenStore[0]);
        setTimeout(() => {
            inAnim = false;
            currentScreen = 0;
            sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
        }, animTime)
    }
}

// Bouger à gauche
function moveLeft() {
    if(currentScreen > 0) {
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[currentScreen - 1]);
        setTimeout(() => {
        inAnim = false;
        currentScreen --;
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
        }, animTime)
    } else {
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[numOfScreens - 1]);
        setTimeout(() => {
            inAnim = false;
            currentScreen = numOfScreens - 1;
            sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
            }, animTime)
    }
}


// Au click sur l'un des cercles
circleStore.forEach(circle => {
    circle.addEventListener("click", event => {
        if(!inAnim){
        // On le convertis en tableau afin d'utiliser la méthode indexOf
        let circleStoreArray = Array.prototype.slice.call(circleStore);
        let circleIndex = circleStoreArray.indexOf(event.target);
        // Configuration du style du cercle
        highlightCircle(event.target);
        // On détermine si l'on doit se déplacer à gauche, à droite ou ne pas bouger
        if(circleIndex > currentScreen){
            changeScreenCircleClick(circleIndex, "right");
        }else if (circleIndex < currentScreen){
            changeScreenCircleClick(circleIndex, "left");
        }
    }
})
})


function changeScreenCircleClick(circleIndex, direction) {
    inAnim = true;
    if(direction === "right"){
        sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[circleIndex]);
        toLeft(screenStore[currentScreen]);
        comeRight(screenStore[circleIndex]);
    }else if (direction === "left"){
        sortPositioning(screenStore[currentScreen], screenStore[circleIndex], screenStore[currentScreen + 1]);
        toRight(screenStore[currentScreen]);
        comeLeft(screenStore[circleIndex]);
    }else{
        inAnim = false;
        return
    }
    setTimeout(() => {
    inAnim = false;
    currentScreen = circleIndex;
    sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
    }, animTime)
}


function highlightCircle(circleSelect, direction) {
    if(circleSelect === undefined && direction === "right"){
        circleSelect = circleStore[0];
    }else if (circleSelect === undefined && direction === "left"){
        circleSelect = circleStore[numOfScreens - 1];
    }
    circleStore.forEach(circle => {
        if(circle === circleSelect){
            circle.classList.add("circle-fill");
        }else{
            circle.classList.remove("circle-fill");
        }
    })
}


// Méthodes d'animations
function toLeft(screen) {
    screen.style.animation = "toLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function toRight(screen) {
    screen.style.animation = "toRight 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function comeRight(screen) {
    screen.style.animation = "comeRight 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}

function comeLeft(screen) {
    screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
    setTimeout(() => {
        screen.style.animation = "";
    }, animTime);
}



// Trier le positionnement pour que les images ne se chevauchent pas
function sortPositioning(mainScreen, leftScreen, rightScreen) {
    // Si l'écran de droite n'est pas définit on doit répéter le premier écran
    if(rightScreen === undefined){
        rightScreen = screenStore[0];
    }
    // Si l'écran de gauche n'est pas définit on utilisera le dernier écran
    if(leftScreen === undefined){
        leftScreen = screenStore[numOfScreens - 1];
    }
    screenStore.forEach(screen => {
        if(screen === mainScreen){
            screen.style.display = "block";
            screen.style.left = "0px";
        }else if (screen === leftScreen){
            screen.style.display = "block";
            screen.style.left = "-100%";
        }else if (screen === rightScreen){
            screen.style.display = "block";
            screen.style.left = "100%";
        }else{
            screen.style.display = "none";
        }
    })
}


// Fonction de défilement automatique
let carousel = document.getElementById("tm-carousel-1");
let scrollTime = Number(carousel.getAttribute("auto-scroll"));

// Cette fonctionnalité sera active uniquement si on met un auto-scroll
if(scrollTime) {
    // Le défilement automatique sera configuré une fois
    let autoWipe = setInterval(() => {
        startAnim("right");
    }, scrollTime);
}

/* ####################
    FIN CAROUSSEL
#####################*/ 