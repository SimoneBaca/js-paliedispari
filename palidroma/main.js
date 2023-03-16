/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/


/*
Palidroma
Inserire parola
Eliminare spazi tra parole
Definire funzione
    Verificare se lettera 1 e lettera n sono uguali
    Verificare se lettera 2 e lettera n-1 sono uguali
    Fino a (parola.lenght)/2
Controllare e stampare risultato
*/

// Inserimento parola
let myWord = prompt("Inserisci una parola:").toLowerCase();

// Rimozione spazi
if (myWord.indexOf(' ') != -1) {
    myWord = myWord.replaceAll(' ', '');
}

// Stampa dati
console.log('Parola:', myWord);
console.log('Lunghezza parola:', myWord.length);
console.log('Numero iterazioni:', Math.ceil((myWord.length)/2));
console.log('---------------');

// Dichiarazione funzione
function paliCheck (word) {

    
    let j;

    for (let i = 0; i < Math.ceil(word.length/2); i++) {

        j = word.length - i -1;

        console.log(`Controllo lettere n.${i+1} e n.${j+1}`);

        if (word[i] != word[j]) {
            console.log(`Esito: lettere non uguali`)
            return false;
        }
        else {
            console.log(`Esito: lettere uguali`)
        }

        console.log('---------------');

    }
    return true;
}

// risultato
if (paliCheck(myWord)) {
    console.log("La parola/frase e' palindroma");
}
else{
    console.log("La parola/frase NON e' palindroma");
}