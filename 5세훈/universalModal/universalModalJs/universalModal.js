const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".md_overlay");
const closeButton = modal.querySelector("button");


const $detailBox = document.querySelector('.detail_commentbox');
const $aboutBox = document.querySelector('.aboutbox');
const $detailBtn = document.querySelector('.toggle_header');
const $aboutBtn = document.querySelector('.toggle_header2');
//detail about 버튼
$aboutBtn.addEventListener('click',e=> { 
    $detailBox.style.display = 'none';
    $aboutBox.style.display = 'block';
    $detailBtn.style.color = '#ccc';
    $aboutBtn.style.color = '#000';
});

$detailBtn.addEventListener('click',e=> { 
    $detailBox.style.display = 'block';
    $aboutBox.style.display = 'none';

    $detailBtn.style.color = '#000';
    $aboutBtn.style.color = '#ccc';
});



//동작함수
const openModal = () => {
    modal.classList.remove("hidden");
}
const closeModal = () => {
    modal.classList.add("hidden");
}
//클릭 이벤트
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);