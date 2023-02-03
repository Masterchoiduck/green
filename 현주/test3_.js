
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
      var seconds=now.getSeconds(); //현재 분
      if((seconds+"").length < 2){
          seconds="0"+seconds;
      }
      //오늘 날짜 완성.
      document.getElementById("parade_now_date").innerHTML = year + '.' + month + '.' + date + ' ' + hour + ':' + minutes + ':' + seconds;
      document.getElementById("ticket_now_time").innerHTML = year + '-' + month + '-' + date;
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





const $att_s=document.querySelectorAll('.att_s')
const $att_title = document.querySelectorAll('.att_title')
const test_title1 =[]
const test_title2 = []
$att_title.forEach(item=>{
  test_title1.push(item.childNodes[1].textContent)
  test_title2.push(item.childNodes[3].textContent)
})

function test(num,aa){
  if(aa===3){
    return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]} Big.png')`
  }
  if(aa){
    return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]} 블러.png')`
  } else {
    return `url('./img/web/어트_${test_title1[num]} ${test_title2[num]}.png')`
  }
}

const att_b1 = document.querySelector('.att_b1')
const $att_mouse_account = document.querySelector('.att_mouse_account')
$att_s.forEach((item,index)=>{

    const att_box = item.querySelector('.att_box');
    item.addEventListener('mouseover', e => {
      item.style.backgroundImage =test(index,1);
      att_box.classList.remove('d-none');
      att_b1.style.backgroundImage = test(index,3)
      $att_mouse_account.classList.add('d-none')
    });

    item.addEventListener('mouseout', e => {
      item.style.backgroundImage =test(index,0);
      att_box.classList.add('d-none');
      att_b1.style.backgroundImage = 'none'
      $att_mouse_account.classList.remove('d-none')
    })
})
        