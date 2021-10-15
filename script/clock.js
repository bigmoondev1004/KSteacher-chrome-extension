var today = new Date();
var nowMonth = today.getMonth(),
    nowDate = today.getDate();
var d=new Date();
var weekday=new Array(7);
weekday[0]="일";
weekday[1]="월";
weekday[2]="화";
weekday[3]="수";
weekday[4]="목";
weekday[5]="금";
weekday[6]="토";

var n = weekday[d.getDay()];
document.write(nowMonth+"월 "+nowDate+"일 "+n+"요일" )