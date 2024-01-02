//Global and constnt variables are defined
var shiftNum = 0;

var inpText = "";

const Upperalphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var finText = "";

//Checks if character is a lower or uppercase letter
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char);
}

//Checks if character is lowercase
function isLetterLowcase(char) {
    return (/[a-z]/).test(char);
}

//Allows button functionalityS
window.onload = function () {
    document.getElementById("encrypt").addEventListener("click", encrypt);
    document.getElementById("decrypt").addEventListener("click", decrypt);
}

//Variables are assigned to element values
function assignVariables() {
    inpText = document.getElementById("initial-text").value;
    shiftNum = Number(document.getElementById("shift-num").value);
    finText = "";
}

//Final text is displayed
function displayText() {
    document.getElementById("final-text").innerText = finText;
}

//If character is uppercase or lowercase it is shifted by shift number specified
//otherwise it is left as it is and added to the final output
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

//functions required for encryption
function encrypt() {
    assignVariables();
    shift();
    displayText();
}

//functions required for decryption
function decrypt() {
    assignVariables();
    shiftNum = shiftNum * -1;
    shift();
    displayText();
}