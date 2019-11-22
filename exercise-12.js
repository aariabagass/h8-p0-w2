function konversiMenit(menit) {
    iniMenit = Math.floor(menit / 60); //ambil bilangan bulat, buang decimal
    iniDetik = menit % 60; //sisa pembagian

    if (iniDetik < 10) {
        iniDetik = '0' + iniDetik; //0+ < 10
    }
    return `${iniMenit}:${iniDetik}`;
}
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
