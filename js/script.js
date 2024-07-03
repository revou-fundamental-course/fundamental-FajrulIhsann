// Di file ini saya hanya memakai untuk validasi form saja. Jika ingin memvalidasi dan menggunakan tombol hapus pesan, ganti script src nya menjadi src="cobaSendiri.js"

let homeName = prompt('Siapakah nama anda?')
document.getElementById('username-home').innerHTML = homeName

function dataPengirim(nama,tanggalLahir,gender,pesan){
    const namaPengirim = document.getElementById('data-nama').innerHTML = nama;
    const tanggalLahirPengirim = document.getElementById('data-tanggalLahir').innerHTML = tanggalLahir;
    const genderPengirim = document.getElementById('data-gender').innerHTML = gender;
    const pesanPengirim = document.getElementById('data-pesan').innerHTML = pesan;
}

function validateForm(){
    const nama = document.forms["form-message"]["nama"].value;
    const tanggal = document.forms["form-message"]["tanggal"].value;
    const gender = document.forms["form-message"]["gender"].value;
    const pesan = document.forms["form-message"]["pesan"].value;

    dataPengirim(nama,tanggal,gender,pesan);
    return false;
}