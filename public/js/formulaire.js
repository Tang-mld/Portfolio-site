/* ####################
      FORMULAIRE
#####################*/

// Je range les conditions dans un objet

const conditions = {
    nom: {
        condition: "inputs[i].value.length > 2",
        isValidated: false
    },
    prenom: {
        condition: "inputs[i].value.length > 2",
        isValidated: false
    },
    email: {
        condition: "inputs[i].value.length > 5",
        isValidated: false
    },
    budget: {
        condition: "inputs[i].value.length >= 1 && inputs[i].value.length <= 10000",
        isValidated: false
    },
    url: {
        condition: "/^http(s)?:\/\//.test(inputs[i].value)",
        isValidated: false
    },
    objet: {
        condition: "inputs[i].value.length >= 3 && inputs[i].value.length <= 20",
        isValidated: false
    }
};


// Je vais selection mon input de l'email
let emailSelected = document.querySelector('checkEmail');

// Je fais une fonction avec une regex pour checker si l'email à le bon format
function validateEmail(emailSelected) {
    let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
    return re.test(emailSelected);
}

validateEmail(emailSelected);


// Je récupère tous les inputs

let inputs = document.querySelectorAll('input');


// Je récupère tous les tooltips et je les masquent

tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(element => element.style.display = 'none');


let _conditions;
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {

        // Pour pouvoir utiliser l'index de l'objet conditions j'utilise la methode values de la class Object

        _conditions = Object.values(conditions)[i];

        // Comme mes conditions sont stoquées en tant que string dans un objet, j'utilise la méthode eval qui me permet d'en faire une vraie condition et pas une string

        if (eval(_conditions.condition)) {
            inputs[i].className = "correct";
            inputs[i].nextElementSibling.style.display = 'none';
            _conditions.isValidated = true;
        } else {
            inputs[i].className = "incorrect";
            inputs[i].nextElementSibling.style.display = 'inline-block';
            _conditions.isValidated = false;
            console.log(inputs[i]);
        }
    })
};


document.querySelector('.tm-form').addEventListener('submit', function (e) {
    // Par défaut je valide le form
    let validation = true;
    // Je scanne l'objet conditions et cherche si une propriété isValidated est fausse
    for (inputName in conditions) {
        if (!conditions[inputName].isValidated) {
            console.log("foirage", inputName);
            validation = false;
        }
    }
    // Si c'est tout bon, je traiterais la demande
    // console.log(validation);
    // console.log(conditions);
    if (validation) {
        alert('Merci pour votre interet. Votre demande sera traitée dans les plus brefs délais.');
    } else {
        // Sinon j'affiche que les champs ne sont pas correctement remplis
        e.preventDefault();
        alert('Tous les champs ne sont pas correctement remplis');
    }

});


/* ####################
    FIN PFORMULAIRE
#####################*/