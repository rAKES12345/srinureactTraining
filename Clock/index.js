const hour=document.querySelector(".time>span:nth-child(1)");
const minutes=document.querySelector(".time>span:nth-child(2)");
const sec=document.querySelector(".time>span:nth-child(3)");
const dayRef=document.querySelector(".day");
const minRef=document.querySelector(".min")
const monthRef=document.querySelector(".month>span:nth-child(1)")
const dayCountRef=document.querySelector(".month>span:nth-child(2)")
let dateObj=new Date();
let day=dateObj.getDay();
let month=dateObj.getMonth();
let dayCount=dateObj.getDate();
let h=0;
let m=0;
let s=0;
hour.innerText=h;
minutes.innerText=m;
sec.innerText=s;
returnInterval=setInterval(()=>{
    hour.innerText=h;
    h++;
    if(h>12){
        h=0;
    }
},3600000);
returnInterval=setInterval(()=>{
    minutes.innerText=m;
    m++;
    if(m>60){
        m=0;
    }
},60000);
returnInterval=setInterval(()=>{
    sec.innerText=s;
    s++;
    if(s>60){
        s=0;
    }
},1000);
switch(day){
    case 0:
    dayRef.innerText="Sunday";
    break;
    case 1:
    dayRef.innerText="Monday";
    break;
    case 2:
    dayRef.innerText="Tuesday";
    break;
    case 3:
    dayRef.innerText="Wednesday";
    break;
    case 4:
    dayRef.innerText="Thursday";
    break;
    case 5:
    dayRef.innerText="Friday";
    break;
    case 6:
    dayRef.innerText="Saturday";
    break;
}
switch(month){
    case 0:
    monthRef.innerText="January";
    break;
    case 1:
    monthRef.innerText="February";
    break;
    case 2:
    monthRef.innerText="March";
    break;
    case 3:
    monthRef.innerText="April";
    break;
    case 4:
    monthRef.innerText="May";
    break;
    case 5:
    monthRef.innerText="June";
    break;
    case 6:
    monthRef.innerText="July";
    break;
    case 7:
    monthRef.innerText="August";
    break;
    case 8:
    monthRef.innerText="September";
    break;
    case 9:
    monthRef.innerText="October";
    break;
    case 10:
    monthRef.innerText="November";
    break;
    case 11:
    monthRef.innerText="December";
    break;
}
dayCountRef.innerText=dayCount;