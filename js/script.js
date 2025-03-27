// ini javascript external

// Konten Perhitungan Luas Persegi
function hitungluaspersegi() {
    let sisi = document.getElementById("sisiLuas").value;
if (sisi > 0) {
let luas = sisi * sisi;
document.getElementById("luas").innerHTML = `Luas: ${luas} cm²`;
} else {
document.getElementById("luas").innerHTML = "Masukkan nilai sisi yang valid!";
}
}
// Tombol Reset
function resetluaspersegi() {
document.getElementById("sisiLuas").value = "";
document.getElementById("luas").innerHTML = "";
}

// Konten Perhitungan Keliling Persegi
function hitungkelilingpersegi() {
    let sisi = document.getElementById("sisiKeliling").value;
    if (sisi > 0) {
        let keliling = 4 * sisi;
        document.getElementById("keliling").innerHTML = `Keliling: ${keliling} cm`;
    } else {
        document.getElementById("keliling").innerHTML = "Masukkan nilai sisi yang valid!";
    }
}
// Tombol Reset
function resetkelilingpersegi() {
    document.getElementById("sisiKeliling").value = "";
    document.getElementById("keliling").innerHTML = "";
}

// Konten Perhitungan Luas Persegi Panjang
function hitungluaspersegipanjang() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;
    if (panjang && lebar) {
    let luas = panjang * lebar;
    document.getElementById("hasil").innerText = `Luas persegi panjang: ${luas} cm`;
    } else {
    document.getElementById("hasil").innerText = "Harap masukkan panjang dan lebar.";
}
}
// Tombol Reset
function resetluaspersegipanjang() {
document.getElementById("panjang").value = "";
document.getElementById("lebar").value = "";
document.getElementById("hasil").innerHTML = "";
} 

// Konten Perhitungan Keliling Persegi Panjang
function hitungkelilingpersegipanjang() {
    let panjang = document.getElementById("panjang2").value;
    let lebar = document.getElementById("lebar2").value;
    if (panjang && lebar) {
        let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
        document.getElementById("hasil-keliling").innerText = `Keliling Persegi Panjang: ${keliling} cm`;
    } else {
        document.getElementById("hasil-keliling").innerText = "Harap masukkan panjang dan lebar.";
    }
}
// Tombol Reset
function resetkelilingpersegipanjang() {
    document.getElementById("panjang2").value = "";
    document.getElementById("lebar2").value = "";
    document.getElementById("hasil-keliling").innerHTML = "";
}