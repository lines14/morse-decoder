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
const dashDotTable = {
    '10': '.',
    '11': '-',
    '00': ''
}
function decode(expr) {
    const words = expr.split('**********');
    const result = [];
    words.forEach(word => {
        const letters = [];
        for(let i = 0; i < word.length; i = i + 10) {
            letters.push(word.slice(i, i + 10));
        }
        const lettersMorse = letters.map(letter => {
            let morse = '';
            for(let i = 0; i < letter.length; i = i + 2) {
                morse += dashDotTable[letter.slice(i, i + 2)];
            }
            return morse;
        })
        const realWord = lettersMorse.reduce((w, l) => w + MORSE_TABLE[l], '');
        result.push(realWord);
    })
    return result.join(' ');
}

module.exports = {
    decode
}