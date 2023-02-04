// const $Html = document.querySelector('html')
//   setTimeout(()=>{
//     console.log('1111');
//     $Html.classList.remove('d-none')
//   },1000)

const $header = document.querySelector('header')
const $menu_bar =document.querySelectorAll('.menu_bar')
const $search_icon_gray=document.querySelector('.search_icon_gray')
const $search_icon_white=document.querySelector('.search_icon_white')
const $ticket_icon_white=document.querySelector('.ticket_icon_white')
const $ticket_icon_gray=document.querySelector('.ticket_icon_gray')
const $user_icon_white=document.querySelector('.user_icon_white')
const $user_icon_gray=document.querySelector('.user_icon_gray')
const $logo_white=document.querySelector('.logo_white')
const $logo_gray=document.querySelector('.logo_gray')
const $ticket__img=document.querySelector('.ticket__img')

const $full2 = document.querySelector('.full2');
const full2TopY = $full2.offsetTop;

console.log(full2TopY);


//이용권티켓 스크롤하기
const box= document.querySelector('.box111');

window.addEventListener("click", function(e){
    console.log(e.clientX, e.clientY);
    let XX = 0
    let YY = -360
    box.style.transform = 'translate(' +XX + 'px,' + YY + 'px)';
});

box.addEventListener('transitionend', function(e){
  box.classList.add('end');
  console.log(e.e.apsedTime); 
  // transition delay time이 찍힌다.
})



// window.onload = function(){
//   console.log('윈도우 새로고침할때 발생');
//   console.log(scrollY);
//   if(scrollY>0){
//     function scrollToTop() {
//           window.scrollBy(0,-50);
//           timeOut=setTimeout('scrollToTop()',10);
//       clearTimeout(timeOut);
//   }
//   }
// }



let scrollTimer = null;

window.addEventListener('scroll', (e) => {
  // console.log(scrollY);
  
    if(!scrollTimer) {
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        
        $menu_bar.forEach(item=> {        

          // 검정
          if (window.scrollY>full2TopY) {
            
            item.classList.add('csh__black')
            $search_icon_gray.style.display='inline-block'
            $search_icon_white.style.display='none'
            $ticket_icon_gray.style.display='inline-block'
            $ticket_icon_white.style.display='none'
            $user_icon_gray.style.display='inline-block'
            $user_icon_white.style.display='none'
            $logo_gray.style.display='inline-block'
            $logo_white.style.display='none'
          } else {   // 흰색
           
            item.classList.remove('csh__black')
            $search_icon_gray.style.display='none'
            $search_icon_white.style.display='inline-block'
            $ticket_icon_gray.style.display='none'
            $ticket_icon_white.style.display='inline-block'
            $user_icon_gray.style.display='none'
            $user_icon_white.style.display='inline-block'
            $logo_gray.style.display='none'
            $logo_white.style.display='inline-block'
          }
        })

      }, 500);
    }
   
  });