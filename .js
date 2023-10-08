// Contoh penggunaan if, else, dan nested if
var usia = 21;
if (usia >= 18) {
    console.log("Anda dewasa");
} else {
    console.log("Anda masih anak-anak");
    if (usia >= 13) {
        console.log("Anda remaja");
    } else {
        console.log("Anda masih anak-anak");
    }
}

// Contoh penggunaan switch case
var day = 7;
var dayName;
switch (day) {
    case 1:
        dayName = "Minggu";
        break;
    case 2:
        dayName = "Senin";
        break;
    case 3:
        dayName = "Selasa";
        break;
    case 4:
        dayName = "Rabu";
        break;
    case 5:
        dayName = "Kamis";
        break;
    case 6:
        dayName = "Jumat";
        break;
    case 7:
        dayName = "Sabtu";
        break;
    default:
        dayName = "Tidak valid";
}
console.log("Hari ini adalah " + dayName);

// Contoh penggunaan for statement
for (let i = 0; i < 10; i++) {
    console.log("Iterasi ke-" + (i + 1));
  }
  
  // Contoh penggunaan while
  let angka = 1;
  
  while (angka <= 5) {
    console.log("Nilai angka: " + angka);
    angka++;
  }
  
  // Contoh penggunaan do while
  let x = 1;
  
  do {
    console.log("Nilai x: " + x);
    x++;
  } while (x <= 5);

  // Contoh penggunaan function
function hitungLuasPersegiPanjang(panjang, lebar) {
    var luas = panjang * lebar;
    return luas;
}
var panjang = 55;
var lebar = 30;
var hasil = hitungLuasPersegiPanjang(panjang, lebar);
console.log("Luas persegi panjang dengan panjang " + panjang + " dan lebar " + lebar + " adalah " + hasil);