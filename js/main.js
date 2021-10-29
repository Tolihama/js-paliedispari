/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// DOM refs
const palindromaInput = document.getElementById('palindroma-input');
const palindromaBtn = document.getElementById('palindroma-btn');
const palindromaOutput = document.getElementById('palindroma-output');

// Palindroma script
palindromaBtn.addEventListener('click', function() {
    // Data to check
    const word = palindromaInput.value.trim();
    const invertedWord = inverter(word);

    // Check
    if (word === invertedWord) {
        palindromaOutput.innerHTML = '<span class="correct">La parola inserita è palindroma</span>';
    } else {
        palindromaOutput.innerHTML = '<span class="error">La parola inserita non è palindroma</span>';
    }
});

// Inverter function
function inverter(word) {
    let res = '';
    for (let i = word.length - 1; i >= 0; i--) {
        res += word[i];
    }
    return res;
}


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// DOM Refs
const btnEvenOdd = document.getElementById('even-odd-btn');

// Script
btnEvenOdd.addEventListener('click', function() {

});