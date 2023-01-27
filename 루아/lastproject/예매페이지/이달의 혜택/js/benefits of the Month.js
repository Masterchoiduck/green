var now = new Date();   //현재시간
var year = now.getFullYear();   //현재 연도
var month = now.getMonth()+1;   //현재 달 
if((month+"").length < 2){
    month="0"+month;
}
var day = now.getDate();      //현재 날짜.
if((day+"").length < 2){
    day="0"+day;      
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
var today = year + "" + month + "" + day;
const test1 = `${year}-${month}-${day}`
const test=[
  {date: test1, content: 'today'},
  {date: '2023-01-01', content: 'newYearSDay'},
  {date: '2023-01-02', content: 'seollal'},
  {date: '2023-03-01', content: 'samiljeol'},
  {date: '2023-05-05', content: 'childrenSDay'},
  {date: '2023-04-08', content: 'buddhaSBirthday'},
  {date: '2023-06-06', content: 'memorialDay'},
  {date: '2023-08-15', content: 'nationalLiberationDay'},
  {date: '2023-08-20', content: 'chuseok'},
  {date: '2023-10-03', content: 'theNationalFoundationDayOfKorea'},
  {date: '2023-10-09', content: 'hangulProclamationDay'},
  {date: '2023-12-25', content: 'christmas'}
]
// { date: '2022-10-15', content: '테스트1' }
// console.log(test);







// 데이터 가공
const calendarList = test.reduce(
  (acc, v) => 
    ({ ...acc, [v.date]: [...(acc[v.date] || []), v.content] })
  , {}
);

// pad method
Number.prototype.pad = function() {
  return this > 9 ? this : '0' + this;
}

// 달력 생성
const makeCalendar = (date) => {
  // 현재의 년도와 월 받아오기
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;

  // 한달전의 마지막 요일
const firstDay = new Date(date.setDate(1)).getDay();
  // 현재 월의 마지막 날 구하기
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  // 남은 박스만큼 다음달 날짜 표시
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = '';

  // 한달전 날짜 표시하기
  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 이번달 날짜 표시하기

  for (let i = 1; i <= lastDay; i++) {
    const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`
    // console.log(date);
    
    htmlDummy += `
      <div class="${calendarList[date]?.join()||'number'}">
        ${i}
        <p>
          <!-- ${calendarList[date] ?.join() || ''}-->
        </p>
      </div>
    `;
  }

  // 다음달 날짜 표시하기
  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }
  
  document.querySelector(`.dateBoard`).innerHTML = htmlDummy;
  document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
}

const date = new Date();

makeCalendar(date);


// 이전달 이동
document.querySelector(`.prevDay`).onclick = () => {
makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
}

// 다음달 이동
document.querySelector(`.nextDay`).onclick = () => {
makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
}