var nama = "Bagas"; //input any value
var peran = "Ksatria"; //choose value 'Ksatria' or 'Tabib' or 'Penyihir'.

if (nama !== "" && peran !== "") { // print fill
  console.log("Selamat datang di Dunia Proxytia, " + nama);
} else if (nama === "" && peran === "") {
  console.log("Nama harus diisi!");
} else if (nama !== "" && peran === "") {
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
}

if (peran === "Ksatria") { // print welcome role
  console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (peran === "Tabib") {
  console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
} else if (peran === "Penyihir") {
  console.log("Halo Ksatria " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}