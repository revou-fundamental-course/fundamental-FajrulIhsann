// Dalam file js ini saya mencoba untuk menyimpan data validasi form ke dalam localStorage agar saat di refresh, pesannya tidak terhapus. Saya pernah belajar sedikit tentang localstorage dari youtuber Dea Afrizal jika ingin menggunakan file js ini cukup mengganti script src nya menjadi src="cobaSendiri.js". Website tetap berjalan normal karena function yang saya gunakan namanya sama.




let displayNama = document.getElementById('data-nama')
let displayBirth = document.getElementById('data-tanggalLahir')
let displayGender = document.getElementById('data-gender')
let displayPesan = document.getElementById('data-pesan')
let currentTime = new Date();
document.getElementById('currentTime').innerHTML = currentTime

// Home Greeting
let greetName = document.getElementById('username-home');
function greeting(){

    if(localStorage.getItem('NamaHome') ){
        greetName.innerHTML = localStorage.getItem('NamaHome')
        
    }else {
        let a = prompt('Siapakah Nama Anda?');
        localStorage.setItem('NamaHome', a );
        greetName.innerHTML = localStorage.getItem('NamaHome')
    }
    
    if((localStorage.getItem('NamaHome') == 'null') || (localStorage.getItem('NamaHome') == '')){
        greetName.innerHTML = 'User'
    }
  
}
greeting()



// Mengambil nilai pesan pengirim
displayNama.textContent =   localStorage.getItem('Nama')
displayBirth.textContent =  localStorage.getItem('Tanggal Lahir')
displayGender.textContent =  localStorage.getItem('Jenis Kelamin')
displayPesan.textContent =  localStorage.getItem('Pesan')
    
const lakiLaki = document.getElementById('laki').value;
const perempuan = document.getElementById('perempuan').value;




// Function validasi form
function validateForm() {
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

// Function mereset data pesan pengirim dan nama pada home greeting
function reset() {
    localStorage.clear();
    location.href = './index.html'
}

// Function slide dan autoslide
let slideIndex = 1;
showSlide(slideIndex)
function showSlide(n){
    let img = document.getElementsByClassName('slideImg');
    let i;
    if(n > img.length) slideIndex = 1;
    else if(n <= 1) slideIndex = img.length
    
    for(let i = 0; i < img.length; i++){
        img[i].style.display = "none"
    }

    img[slideIndex - 1].style.display = "block";
}

function plusSlide(n){
    showSlide((slideIndex += n))
    
}
// Auto Slide
setInterval(() => {
    plusSlide(1)
},2500)