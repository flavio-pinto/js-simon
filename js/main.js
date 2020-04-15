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
numeriCasuali= alert('I numeri da ricordare sono: ' + generaNumeri(1, 100));

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