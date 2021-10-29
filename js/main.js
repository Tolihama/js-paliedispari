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
    const word = palindromaInput.value.trim().toLowerCase();

    // Check
    if (palindromeCheck(word)) {
        palindromaOutput.innerHTML = '<span class="correct">La parola inserita è palindroma</span>';
    } else {
        palindromaOutput.innerHTML = '<span class="error">La parola inserita non è palindroma</span>';
    }
});

// FUNCTIONS
// Palindrome check
function palindromeCheck(word) {
    let isPalindrome = false;
    const wordToCheck = word;
    const invertedWord = inverter(wordToCheck);
    if (wordToCheck === invertedWord) {
        isPalindrome = true;
    }
    return isPalindrome;
}

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
const btnEvenOddScript = document.getElementById('even-odd-script-btn');
const btnEven = document.getElementById('even-btn');
const btnOdd = document.getElementById('odd-btn');
const evenOddChoice = document.getElementById('even-odd-choice');
const evenOddOutput = document.getElementById('even-odd-output');
const evenOddResult = document.getElementById('even-odd-result');

// Even or Odd user choice
let evenUserChoice = false;
btnEven.addEventListener('click', function() {
    evenUserChoice = true;
    evenOddChoice.innerHTML = "L'utente ha scelto 'pari'.";
});
btnOdd.addEventListener('click', function() {
    evenUserChoice = false;
    evenOddChoice.innerHTML = "L'utente ha scelto 'dispari'.";
});

// Script
btnEvenOddScript.addEventListener('click', function() {
    // User input
    let userNumber = 0;
    do {
        userNumber = parseInt(prompt('Inserire un numero da 1 a 5.').trim());
    } while (userNumber < 1 || userNumber > 5 || isNaN(userNumber))

    // Computer number
    const computerNumber = rand(1, 5);

    // Sum
    const sum = userNumber + computerNumber;

    // Sum even or odd check
    const sumIsEven = evenChecker(sum);

    // Print output
    evenOddOutput.innerHTML = `
    <div>Numero scelto dall'utente: ${userNumber}</div>
    <div>Numero del computer: ${computerNumber}</div>
    <div>Somma: ${sum}</div>
    `;

    // User choice check
    if (sumIsEven === evenUserChoice) {
        evenOddResult.innerHTML = "L'utente ha vinto!";
    } else {
        evenOddResult.innerHTML = "Ha vinto il Computer!";
    }
});

// FUNCTIONS
// Rand function
function rand(min, max) {
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

// Even checker function
function evenChecker(number) {
    let isEven = false;
    if (number % 2 === 0) {
        isEven = true;
    }
    return isEven;
}