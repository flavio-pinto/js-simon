/**
 * GIOCO "SIMON SAYS"
 * Crea un alert che espone 5 numeri casuali (univoci)
 * Da li parte un timer di 30 secondi
 * Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente
 * Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 * Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )
 */

// Creo un alert che mi mostra un array di 5 numeri casuali
var numeriCasuali = [];
numeriCasuali = (generaNumeri(1, 100));
console.log(numeriCasuali);
alert('I numeri da ricordare sono: ' + numeriCasuali);

// Creo variabile punteggio
var punteggio = 0;

// Funzione partita
var inizioPartita = setTimeout(function(){
    var arrayInputUtente = [];
    for(var i = 1; i <= 5; i++) {
        var numeroUtente = [i];
        numeroUtente = parseInt(prompt('Inserisci un numero'));
        
        while(arrayInputUtente.includes(numeroUtente) || isNaN(numeroUtente)) {
            numeroUtente = parseInt(prompt('Per favore, inserisci un numero che non hai già inserito e non inserire stringe di testo!'));
        }
        arrayInputUtente.push(numeroUtente);
        console.log('I numeri inseriti dall\' utente sono: ' + arrayInputUtente);
        
        if (numeriCasuali.includes(numeroUtente)) {
            punteggio++;
        }
    }

    if (punteggio < 5) {
        console.log('Partita terminata, il tuo punteggio è: ' + punteggio);
        alert('Partita terminata, il tuo punteggio è: ' + punteggio);
    } else {
        console.log('Complimenti, hai ricordato tutti e cinque i numeri!');
        alert('Complimenti, hai ricordato tutti e cinque i numeri!');
    }
}, 100);

// Creo una funzione che mi generi numeri casuali
function generaNumeri(min, max) {
    var array = [];
    var numero = '';
    for(var i = 1; i <= 5; i++) {
        numero = [i];
        numero = Math.floor(Math.random() * (max - min)) + min;

        while (array.includes(numero)) {
            numero = Math.floor(Math.random() * (max - min)) + min;
        }
        array.push(numero);
    }
    return array;
}