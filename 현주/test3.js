//날짜 구하기
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
//시간 구하기
    const hour = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const timeStr = hour + ':' + minutes;

    document.getElementById("parade_now_date").innerHTML = year + '.' + month + '.' + day + ' ' + hour + ':' + minutes;




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