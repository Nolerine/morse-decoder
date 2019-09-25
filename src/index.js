const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    decodedExpression = "";
    
    for (let i=0; i < expr.length; i+=10) {             //вычленяем из входной строки куски по 10 символов
        let encodedLetter = expr.substr(i, 10);
        
        if (encodedLetter == '**********') {
            decodedExpression += ' ';
        
        } else {
            let morseLetter = "";
            let symbol = "";
            for (let j=0; j < 10; j+=2) {               //преобразовываем 10 символов в точки и тире
                symbol = "";
                symbol = encodedLetter.substr(j, 2);
                if (symbol == "10") {
                    morseLetter += ".";
                } else if (symbol == "11") {
                    morseLetter += "-";
                }
            }
            decodedExpression += MORSE_TABLE[morseLetter];
        }
        
    }
    return decodedExpression;
}

module.exports = {
    decode
}