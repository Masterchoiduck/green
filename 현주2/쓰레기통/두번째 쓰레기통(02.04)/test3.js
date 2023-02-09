
      const interval = setInterval(function() {
      var now = new Date();   //현재시간
      var year = now.getFullYear();   //현재 연도
      var month = now.getMonth()+1;   //현재 달 
      if((month+"").length < 2){
          month="0"+month;
      }
      var date = now.getDate();      //현재 날짜.
      if((date+"").length < 2){
          date="0"+date;      
      }
      var hour = now.getHours();   //현재 시간.
      if((hour+"").length < 2){
      hour="0"+hour;      
      }
      var minutes=now.getMinutes(); //현재 분
      if((minutes+"").length < 2){
          minutes="0"+minutes;
      }
      //오늘 날짜 완성.
      document.getElementById("parade_now_date").innerHTML = year + '.' + month + '.' + date + ' ' + hour + ':' + minutes;
  }, 100);


//퍼레이드 캐러셀 슬라이드
    $(document).ready(function(){
        $('.multiple-items').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15.6250vw',
          speed:300,
          
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    centerMode: true,
                    centerPadding: '29.2969vw',
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    centerMode: true,
                    centerPadding: '22.1354vw',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]
        });
      });


//어트랙션 호버 - 이미지 변경


// const blurImg1 = document.querySelectorAll('.att_s');
// const blurImg2 = document.querySelector('.att_s2');
// const blurImg3 = document.querySelector('.att_s3');
// const blurImg4 = document.querySelector('.att_s4');
// const blurImg5 = document.querySelector('.att_s5');
// const blurImg6 = document.querySelector('.att_s6');




const $att_s=document.querySelectorAll('.att_s')
const $att_box = document.querySelectorAll('.att_box')
const $att_title = document.querySelectorAll('.att_title')

const test_title1 =[]
const test_title2 = []
$att_title.forEach(item=>{
    test_title1.push(item.childNodes[1].textContent)
    test_title2.push(item.childNodes[3].textContent)
})
console.log('어트_해리포터 앤드  더 포비든 저니.png');
function test(num,aa){
  if(aa){
    console.log(`url('./img/web/어트_${test_title1[num]} ${test_title2[num]} 블러.png')`);
    return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]} 블러.png')`
  } else {
    return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]}.png')`
  }
}


$att_s.forEach((item,index)=>{
  $att_box.forEach((ite,idx)=>{
    item.addEventListener('mouseover',e=>{
      if(index===idx){
        console.log(test(index,1));
        item.style.backgroundImage =test(index,1);
        ite.style.display = 'block'
      }
    })
    item.addEventListener('mouseout',e=>{
      if(index===idx){
        console.log(test(index,0));
        item.style.backgroundImage =test(index,0);
        ite.style.display = 'none'
      }
    })
  })
})
        



/*
attTitle.addEventListener('mouseover', (event)=> {
  attTitle.style.display="none";
})

*/
