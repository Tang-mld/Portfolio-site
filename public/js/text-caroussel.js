/* ####################
    TEXT-CAROUSSEL
#####################*/


// variables
let speed = 75;
let h2 = document.querySelector('.tm-title-anime');
let delay = h2.innerHTML.length * speed + speed;

function textEffect(element, speed) {
	let text = element.innerHTML;
	element.innerHTML = "";
	let i = 0;

	let timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// Lancement de la fonction
textEffect(h2, speed);


/* ####################
  FIN TEXT-CAROUSSEL
#####################*/