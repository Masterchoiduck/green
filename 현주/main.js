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

const $body = document.querySelector("body")
//이용권티켓 스크롤하기
const box= document.querySelector('.box111');

let deltaY = 0

window.addEventListener("wheel", function(e){
  if(!deltaY){
      wheelTimer = setTimeout(function() {
        deltaY ++
        $body.classList.remove("stop-scrolling")
        // console.log(deltaY);
        return
    }, 50);
  }
  // console.log(Num);
  // console.log(e.clientX, e.clientY);
  let XX = 0
  let YY = -360
  box.style.transform = 'translate(' +XX + 'px,' + YY + 'px)';
});












box.addEventListener('transitionend', function(e){
  box.classList.add('end');
  // console.log(e); 
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


const $main_side_bar = document.querySelector('#main_side_bar')
const $guide_map_icon = document.querySelector('.guide_map_icon')

let scrollTimer = null;
$guide_map_icon.style.display='none'
window.addEventListener('scroll', (e) => {
  // console.log(scrollY);
  
    if(!scrollTimer) {
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        
        $menu_bar.forEach(item=> {        

          // 검정
          if (window.scrollY>full2TopY) {
            $guide_map_icon.style.display='inline-block'
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
            $guide_map_icon.style.display='none'
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
    // -2860
    if(window.scrollY>=2916){
  
        $guide_map_icon.style.position='absolute'
        $guide_map_icon.style.bottom = '-2780px'
        // console.log('고정');
      
    }
    else {
      $guide_map_icon.style.position='fixed'
      $guide_map_icon.style.bottom = '60px'
      // console.log('움직임');
    }
  });

  const $swiperSlide = document.querySelectorAll('.swiper-slide')
  $swiperSlide.forEach(item=>{
    console.log(item);
    const $are=item.getAttribute('aria-label')
    const $dic=item.querySelector('.parade_text_box')
    console.log($are);
    const $IMG=item.querySelector('img')
    $IMG.addEventListener('mouseover',e=>{
      if($are==='1 / 5'){
        $IMG.src='./img/web/퍼레이드_마리오_블러.png'
        $dic.classList.remove('d-none')
      }
      if($are==='2 / 5'){
        $IMG.src='./img/web/퍼레이드_쥬라기_블러.png'
        $dic.classList.remove('d-none')
      }
      if($are==='3 / 5'){
        $IMG.src='./img/web/퍼레이드_미니언즈_블러.png'
        $dic.classList.remove('d-none')
      }
      if($are==='4 / 5'){
        $IMG.src='./img/web/퍼레이드_트랜스포머_블러.png'
        $dic.classList.remove('d-none')
      }
      if($are==='5 / 5'){
        $IMG.src='./img/web/퍼레이드_해리포터_블러.png'
        $dic.classList.remove('d-none')
      }
    })
    $IMG.addEventListener('mouseout',e=>{
      if($are==='1 / 5'){
        $IMG.src='./img/web/퍼레이드_마리오.png'
        $dic.classList.add('d-none')
      }
      if($are==='2 / 5'){
        $IMG.src='./img/web/퍼레이드_쥬라기.png'
        $dic.classList.add('d-none')
      }
      if($are==='3 / 5'){
        $IMG.src='./img/web/퍼레이드_미니언즈.png'
        $dic.classList.add('d-none')
      }
      if($are==='4 / 5'){
        $IMG.src='./img/web/퍼레이드_트랜스포머.png'
        $dic.classList.add('d-none')
      }
      if($are==='5 / 5'){
        $IMG.src='./img/web/퍼레이드_해리포터.png'
        $dic.classList.add('d-none')
      }
    })
  })