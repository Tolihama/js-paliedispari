// PALINDROMA
// Dom refs
const palInput = document.getElementById('palindroma-input');
const palOutput = document.getElementById('palindroma-output');
const palTrigger = document.getElementById('palindroma-btn');

// Script
palTrigger.addEventListener('click', function() {
    const input = palInput.value.trim().toLowerCase();
    let isPalindroma = false;
    palOutput.classList.remove('d-none');
    if (input === '') {
        palOutput.innerHTML = '<div class="text-warning p-2">Inserire la parola da valutare.</div>';
        return;
    }
    if (!specialCharCheck(input)) {
        isPalindroma = palindromaCheck(input);
        if (isPalindroma) {
            palOutput.innerHTML = '<div class="text-success p-2">La parola è palindroma.</div>';
        } else {
            palOutput.innerHTML = '<div class="text-danger p-2">La parola non è palindroma.</div>';
        }
    } else {
        palOutput.innerHTML = '<div class="text-warning p-2">Inserimento non valido. Non sono ammessi numeri e caratteri speciali.</div>';
    }
});

// Palindroma Functions
function invertString(string) {
    const stringToInvert = string;
    let invertedString = '';
    for (let i = stringToInvert.length - 1; i >= 0; i--) {
        invertedString += stringToInvert[i];
    }
    return invertedString;
}

function specialCharCheck(string) {
    const specialCharList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let thereIsSpecialChar = false;
    for (let i = 0; i < string.length; i++) {
        if (specialCharList.includes(string[i])) {
            thereIsSpecialChar = true;
        }
    }
    return thereIsSpecialChar;
}

function palindromaCheck(string) {
    const inputString = string;
    const invertedString = invertString(inputString);
    let isPalindroma = false;
    if (inputString === invertedString) {
        isPalindroma = true;
    }
    return isPalindroma;
}

// PARI E DISPARI
// DOM refs
const evenOddNumberInput = document.getElementById('even-odd-number-input');
const evenRadio = document.getElementById('even');
const oddRadio = document.getElementById('odd');
const evenOddBtn = document.getElementById('even-or-odd-btn');
const evenOddOutput = document.getElementById('even-or-odd-output');

evenOddBtn.addEventListener('click', function() {
    evenOddOutput.innerHTML = '';
    evenOddOutput.classList.remove('d-none');
    const userNumber = parseInt(evenOddNumberInput.value);
    let userChoice = '';
    if (evenRadio.checked) {
        userChoice = 'even';
    } else if (oddRadio.checked) {
        userChoice = 'odd';
    } else {
        typingEffect(evenOddOutput, 'Selezionare "Pari" oppure "Dispari" per proseguire.', 20);
        return;
    }
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        typingEffect(evenOddOutput, 'Si prega di selezionare un numero compreso tra 1 e 5.', 20);
        return;
    } else {
        let userChoiceIta = '';
        let sumTypeIta = '';
        let winner = '';
        const pcNumber = rand(1, 5);
        const sum = userNumber + pcNumber;
        const sumType = oddOrEven(sum);
        switch (userChoice) {
            case 'odd':
                userChoiceIta = 'dispari';
                break;
            case 'even':
                userChoiceIta = 'pari';
        }
        switch (sumType) {
            case 'odd':
                sumTypeIta = 'dispari';
                break;
            case 'even':
                sumTypeIta = 'pari';
        }

        userChoice === sumType ? winner = "L'utente ha vinto." : winner = 'Il computer ha vinto.';

        const output = `
        L'utente ha scelto ${userChoiceIta}.<br>
        L'utente ha inserito ${userNumber}.<br>
        Il computer ha generato il numero ${pcNumber}.<br>
        La somma dei due numeri è ${sum} ed è un numero ${sumTypeIta}.<br>
        ${winner}`;

        evenOddOutput.innerHTML = output;
    }
});

// Functions
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function oddOrEven(number) {
    let result = '';
    number % 2 === 0 ? result = 'even' : result = 'odd';
    return result;
}


// TYPING EFFECT
function typingEffect(domElement, string, timeInterval) {
    const stringToType = string;
    let i = 0;
    addChar();

    function addChar() {
        if (i < stringToType.length) {
            domElement.innerHTML += stringToType[i];
            i++;
        } else {
            clearTimeout(addChar);
        }
        setTimeout(addChar, timeInterval);
    }
}

function addBreakRule(domElement) {
    domElement.innerHTML += '<br>';
}