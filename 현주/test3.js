
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


const blurImg1 = document.querySelector('.att_s1');
const blurImg2 = document.querySelector('.att_s2');
const blurImg3 = document.querySelector('.att_s3');
const blurImg4 = document.querySelector('.att_s4');
const blurImg5 = document.querySelector('.att_s5');
const blurImg6 = document.querySelector('.att_s6');

const attTitle = document.querySelector('.att_box');
/* 1 */
blurImg1.addEventListener('mouseover', (event)=> {
  attTitle.style.display = "block";
  blurImg1.style.backgroundImage ="url('./img/web/어트_해리포터 앤드 포비든 저니 블러.png')";
})
blurImg1.addEventListener('mouseout', (event)=> {
  attTitle.style.display = "none";
  blurImg1.style.backgroundImage ="url('./img/web/어트_해리포터 앤드 포비든 저니.png')";
})
/* 2 */
blurImg2.addEventListener('mouseover', (event)=> {
  attTitle.style.display = "block";
  blurImg2.style.backgroundImage ="url('./img/web/어트_쥬라기월드 더 라이드 블러.png')";
})
blurImg2.addEventListener('mouseout', (event)=> {
  attTitle.style.display = "none";
  blurImg2.style.backgroundImage ="url('./img/web/어트_쥬라기월드 더 라이드.png')";
})
/*
attTitle.addEventListener('mouseover', (event)=> {
  attTitle.style.display="none";
})

*/
