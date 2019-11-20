//01. Looping while =======================
//Forward
console.log("LOOPING PERTAMA");
var forward = 0;

while (forward < 20) { //while less than 20
    forward += 2; // +2
    console.log(forward + ' - I love coding'); //print after operation
}
//Backward
console.log("LOOPING KEDUA");
var backward = 20;

while (backward > 0) { //while more than 0
    console.log(backward + ' - I will become full stack developer'); //print before operation
    backward -= 2; //-2
}

//02. Looping For ==========================
//Forward
console.log('LOOPING PERTAMA')
for (var i = 1; i <= 20; i++) { //starting 1 until <= 20, +1
    console.log(i + ' - I love coding');
}

//Backward
console.log('LOOPING KEDUA')
for (var j = 20; j > 0; j--) { //starting 20 until 1, -1
    console.log(j + ' - I will become fullstack developer');
}

//03. Ganjil Genap =========================
for (var i = 1; i <= 100; i++) { //starting 1 until i<=100, +1
    if (i % 2 === 0) { //condition even
        console.log(i + ' GENAP')
    } else {
        console.log(i + ' GANJIL');
    }
}

//Kelipatan 3
for (j = 1; j <= 100; j += 2) { //j=1 -> j=j+2 -> 3,5,7 -> until 100
    if (j % 3 === 0) { //condition if true
        console.log(j + ' kelipatan 3')
    } else {
        console.log('')
    }
}

//Kelipatan 6
for (j = 1; j <= 100; j += 5) { //6,11,16
    if (j % 6 === 0) {
        console.log(j + ' kelipatan 6')
    } else {
        console.log('')
    }
}

//Kelipatan 10
for (j = 1; j <= 100; j += 9) { //10,19, 28
    if (j % 10 === 0) {
        console.log(j + ' kelipatan 10')
    } else {
        console.log('')
    }
}