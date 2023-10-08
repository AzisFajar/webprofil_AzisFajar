// Fungsi untuk menentukan apakah suatu bilangan adalah positif, negatif, atau nol
function cekAngka(angka) {
    if (angka > 0) {
        return "Positif";
    } else if (angka < 0) {
        return "Negatif";
    } else {
        return "Nol";
    }
}

// Switch case untuk menentukan hari berdasarkan angka 1-7
function hariDalamMinggu(angkaHari) {
    switch (angkaHari) {
        case 1:
            return "Minggu";
        case 2:
            return "Senin";
        case 3:
            return "Selasa";
        case 4:
            return "Rabu";
        case 5:
            return "Kamis";
        case 6:
            return "Jumat";
        case 7:
            return "Sabtu";
        default:
            return "Hari tidak valid";
    }
}

// For statement untuk mencetak angka dari 1 hingga 5
console.log("Mencetak angka dari 1 hingga 5 dengan for statement:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop untuk mencetak angka dari 1 hingga 5
console.log("Mencetak angka dari 1 hingga 5 dengan while loop:");
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Do-while loop untuk mencetak angka dari 1 hingga 5
console.log("Mencetak angka dari 1 hingga 5 dengan do-while loop:");
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Memanggil fungsi untuk menguji angka
let angkaUji = -3;
console.log(`Angka ${angkaUji} adalah ${cekAngka(angkaUji)}`);

// Memanggil fungsi untuk menentukan hari
let angkaHariUji = 4;
console.log(`Angka ${angkaHariUji} adalah ${hariDalamMinggu(angkaHariUji)}`);