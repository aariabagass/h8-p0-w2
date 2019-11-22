function balikKata(kata) {
    var tampung = '';
    for (i = kata.length - 1; i >= 0; i--) { // length-1 convert index-> start from 0, descending
        tampung += kata[i];
    }
    return tampung;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS