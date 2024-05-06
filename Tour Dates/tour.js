let welcome = document.querySelector('#welcome');
let username;  
    
do {
        username = prompt("¡Hola! ¿Cómo te llamas?");
        if (username.length < 3) {
            alert("El nombre debe tener al menos 3 letras. Por favor, introduce tu nombre nuevamente.");
        } else {
            let firstLetter = username.charAt(0);
            let firstLetterCap = firstLetter.toUpperCase();
            username = firstLetterCap + username.slice(1);
            alert("¡Bienvenido, " + username + "!");
            welcome.textContent = "¡Hola, " + username + "!";
            break;
        }
} while (username.length < 3);

let userage = parseInt(prompt("¿Qué edad tienes? Debes ser mayor de 18 años para poder comprar entradas."));

if (userage >= 18) {
    alert('¡Eres apto para comprar entradas! Revisa las fechas y la ubicación antes de comprar una entrada.');
} else {
    alert('No eres apto para comprar entradas, vaya a tomar la choco.');
    button.setAttribute("disabled");
}

let button = {
    button0: document.querySelector('#button0'),
    button1: document.querySelector('#button1'),
    button2: document.querySelector('#button2'),
    button3: document.querySelector('#button3'),
    button4: document.querySelector('#button4'),
    button5: document.querySelector('#button5'),
    button6: document.querySelector('#button6')
}

place = {
    place0: document.querySelector('#place0').textContent,
    place1: document.querySelector('#place1').textContent,
    place2: document.querySelector('#place2').textContent,
    place3: document.querySelector('#place3').textContent,
    place4: document.querySelector('#place4').textContent,
    place5: document.querySelector('#place5').textContent,
    place6: document.querySelector('#place6').textContent
}

ticketCount = {
    place0: 3,
    place1: 7,
    place2: 2,
    place3: 1,
    place4: 8,
    place5: 5,
    place6: 4
}

function getTicket(x) {
    if (ticketCount[x] > 0) {
        ticketCount[x]--;
        alert('¡Felicidades, ' + username + '! ¡Has comprado una entrada en ' + place[x] + '! Quedan ' + ticketCount[x] + ' entradas disponibles en ' + place[x] + '.');
    } else {
        alert('No hay entradas disponibles en ' + place[x] + '.');
    }
}

for (let i = 0; i < 7; i++) {
    button[`button${i}`].addEventListener('click', function() {
        getTicket(`place${i}`);
    });
}












