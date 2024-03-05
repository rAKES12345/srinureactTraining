const moreRef = document.querySelector(".right > div:nth-child(1) > b");
const leftRef = document.querySelector(".left");
const rightRef = document.querySelector(".right");
const welcomeRef=document.querySelector(".welcome");
const slRef=document.querySelector(".sl");
const sluRef=document.querySelector(".sl>div:nth-child(2)");
const outputRef=document.querySelector("#output");
const inputRef=document.querySelector("input[type=text]");
const btnRef=document.querySelector("body > div > div > div.right > div.input > input[type=button]:nth-child(2)");
const userRef=document.querySelector(".user");
const selectRef=document.querySelector("#select");
let uNameRef=document.querySelector(".user > div:nth-child(1)");

moreRef.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(leftRef);
    if (parseInt(computedStyle.zIndex) === -1) {
        leftRef.style.zIndex = "4";
        moreRef.innerText = "X";
    } else {
        moreRef.innerText = "=";
        leftRef.style.zIndex = "-1";
    }
});
 
setTimeout(()=>{
    welcomeRef.style.display="none";
},0)
userRef.style.display="none";
slRef.style.display="none";
selectRef.style.display="none";

btnRef.addEventListener("click",()=>{
    userRef.style.display="block";
    uNameRef.innerText=inputRef.value;
    setTimeout(()=>{
        let prompt=`Hi ${uNameRef.innerText} Please select your issue`;
        sluRef.innerText=prompt;
        slRef.style.display="flex";
        selectRef.style.display="flex";
    },1000);
    inputRef.value="";
})

outputRef.style.display="none";
