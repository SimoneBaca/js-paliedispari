/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/


/*
Pari e Dispari
1. Utente sceglie pari o dispari
2. Utente inserisce un numero da 1 a 5 (x)
3. Funzione:
        Generare un numero random tra 1 e 5 per il pc (y)
4. Sommare x e y (z)
5. Funzione:
        Controllare se z e' pari o dispari
6. Stampare il vincitore in base alla scelta dell'utente e del risultato di (5.)
*/

// Scelta pari o dispari
let scelta;
do {

    // Inserimento scelta utente
    scelta = prompt("Scegli pari o dispari:").toLowerCase();

    // Messaggio errore caso scelta non valida
    if (scelta != 'pari' && scelta != 'dispari') {
        console.log ('Inserisci una scelta valida !!!');
    }

} while (scelta != 'pari' && scelta != 'dispari')
console.log ('Hai scelto:', scelta);

// Scelta numero utente
let numeroUtente;
do {

    // Inserimento numero utente
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

    // Messaggio errore caso numero non valido
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        console.log ('Inserisci un numero valido !!!');
    }

} while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5)
console.log ('Hai inserito:', numeroUtente);

// Generazione numero random per pc
const numeroPc = randomNumber(1,5);
console.log ('Il pc ha inserito:', numeroPc);

const somma = numeroUtente + numeroPc;
console.log ('La somma è :', somma);

// Controllo se risultato e' pari
const risultato = isEven(somma);
console.log ('La somma è un numero:', risultato);
if (scelta == risultato) {
    console.log ("L'utente ha vinto");
}
else {
    console.log ("Il pc ha vinto");
}


// Numero random in un intervallo
function randomNumber (min, max) {

    return Math.floor(Math.random() * (max - min) + min);

}

// Controlla se il valore dell'argomento e' un numero pari
function isEven (num) {
    if (num % 2 == 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}