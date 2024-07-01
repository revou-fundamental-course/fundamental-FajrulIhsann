let displayNama = document.getElementById('data-nama')
let displayBirth = document.getElementById('data-tanggalLahir')
let displayGender = document.getElementById('data-gender')
let displayPesan = document.getElementById('data-pesan')
let currentTime = new Date();
document.getElementById('currentTime').innerHTML = currentTime



if (localStorage.getItem('Nama')) {
    document.getElementById('username-home').innerHTML = localStorage.getItem('Nama')
    
}else{
    document.getElementById('username-home').innerHTML = 'User'
}




displayNama.textContent =   localStorage.getItem('Nama')
displayBirth.textContent =  localStorage.getItem('Tanggal Lahir')
displayGender.textContent =  localStorage.getItem('Jenis Kelamin')
displayPesan.textContent =  localStorage.getItem('Pesan')
    
const lakiLaki = document.getElementById('laki').value;
const perempuan = document.getElementById('perempuan').value;

let nilaiTerformat



function display() {
    let dataNama = document.getElementById('nama'); 
    let dataBirth = document.getElementById('date').value;
    let dataPesan = document.getElementById('pesan'); 
    let dataGender = document.querySelector('input[name="gender"]:checked').value;

        const myArray = dataBirth.split("-");
        let tanggal = myArray[2];
        let bulan = myArray[1];
        let tahun = myArray[0];
        
        dataBirth = tanggal + '-' + bulan + '-' + tahun;
       
     



    localStorage.setItem('Nama', dataNama.value)
    localStorage.setItem('Tanggal Lahir', dataBirth)
    localStorage.setItem('Pesan', dataPesan.value)
    localStorage.setItem('Jenis Kelamin', dataGender)
    location.href = './index.html'
}


function reset() {
    localStorage.clear();
    location.href = './index.html'
}