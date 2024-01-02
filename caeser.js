var shiftNum = 0;

var inpText = "";

const Upperalphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var finText = "";

function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char);
}

function isLetterLowcase(char) {
    return (/[a-z]/).test(char);
}


window.onload = function () {
    document.getElementById("encrypt").addEventListener("click", encrypt);
    document.getElementById("decrypt").addEventListener("click", decrypt);
}

function assignVariables() {
    inpText = document.getElementById("initial-text").value;
    shiftNum = Number(document.getElementById("shift-num").value);
    finText = "";
}

function displayText() {
    document.getElementById("final-text").innerText = finText;
}

function shift() {
    for (let i = 0; i < inpText.length; i++) {
        if (isCharacterALetter(inpText[i])) {
            if (isLetterLowcase(inpText[i])) {
                let charIndex = alphabet.indexOf(inpText[i]);
                
                if (charIndex + shiftNum > 25) {
                    finText = finText + alphabet[charIndex + shiftNum - 25];
                }
                else if(charIndex + shiftNum < 0){
                    finText = finText + alphabet[charIndex + shiftNum +25];
                }
                else {
                    finText = finText + alphabet[charIndex + shiftNum];
                }
            }
            else {
                let charIndex = Upperalphabet.indexOf(inpText[i]);

                if (charIndex + shiftNum > 25) {
                    finText = finText + Upperalphabet[charIndex + shiftNum -25];
                }
                else if(charIndex + shiftNum < 0){
                    finText = finText + Upperalphabet[charIndex + shiftNum +25];
                }
                else {
                    finText = finText + Upperalphabet[charIndex+shiftNum];
                }
            }
        }
        else {
            finText = finText + inpText[i];
        }
    }
}

function encrypt() {
    assignVariables();
    shift();
    displayText();
}

function decrypt() {
    assignVariables();
    shiftNum = shiftNum * -1;
    shift();
    displayText();
}