let displayNama = document.getElementById('data-nama')
let displayBirth = document.getElementById('data-tanggalLahir')
let displayGender = document.getElementById('data-jenisKelamin')
let displayPesan = document.getElementById('data-pesan')

function display() {
    let dataNama = document.getElementsById('nama'); 
    let dataBirth = document.getElementById('tanggal');
    let dataGender = document.getElementsByname('gender'); 
    let dataPesan = document.getElementsById('pesan'); 

    displayNama.innerHTML += dataNama
    displayBirth.innerHTML += dataBirth
    displayGender.innerHTML += dataGender
    displayPesan.innerHTML += dataPesan
}