//01. Arrange Star ==========
var star = 5;
for (i = 0; i < star; i++) { //counting 0,1,2,3,4
    console.log('*');
}
//02. Star nested looping -> star=row=col
var stars = 5;
for (i = 0; i < stars; i++) { //counting 0,1,2,3,4
    var tampung = '';
    for (j = 0; j < stars; j++) { //counting 0,1,2,3,4
        tampung += '*';
    }
    console.log(tampung)
}

//03. Star - Stairs top left 
var starr = 5;
for (i = 0; i < starr; i++) {
    var tumpang = '';
    for (j = 0; j <= i; j++) {  //i ->0,1,2,3,4
        tumpang += '*';
    }
    console.log(tumpang);
}

