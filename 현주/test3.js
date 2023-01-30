
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