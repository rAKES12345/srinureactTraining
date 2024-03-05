const btn1Ref=document.querySelector("div.input > div:nth-child(1)");
const btn2Ref=document.querySelector("div.input > div:nth-child(2)");
const btn3Ref=document.querySelector("div.input > div:nth-child(3)");
const btn4Ref=document.querySelector("div.input > div:nth-child(4)");
const btn5Ref=document.querySelector("div.input > div:nth-child(5)");
const i1Ref=document.querySelector("div.preview > div:nth-child(1) > div:nth-child(1)");
const i2Ref=document.querySelector("div.preview > div:nth-child(1) > div:nth-child(2)");
const i3Ref=document.querySelector("div.preview > div:nth-child(2) > div:nth-child(1)");
const i4Ref=document.querySelector("div.preview > div:nth-child(2) > div:nth-child(2)");
const i5Ref=document.querySelector("div.preview > div:nth-child(2) > div:nth-child(3)");
const i6Ref=document.querySelector("div.preview > div:nth-child(3) > div:nth-child(1)");
const i7Ref=document.querySelector("div.preview > div:nth-child(3) > div:nth-child(2)");
const i8Ref=document.querySelector("div.preview > div:nth-child(3) > div:nth-child(3)");
const i9Ref=document.querySelector("div.preview > div:nth-child(3) > div:nth-child(4)");
const mainInnerRef=document.querySelector(".main_inner");
const scoreRef=document.querySelector(".score");
const continueRef=document.querySelector(".score>input");
const h1Ref=document.querySelector(".score>h1");
let l1=0;
let l2=0;

let inputString=[];

const b1=(x)=>{
    inputString+=x;
    console.log(inputString);
}
const b2=(x)=>{
    inputString+=x;
    console.log(inputString);
}
const b3=(x)=>{
    inputString+=x;
    console.log(inputString);
}
const b4=(x)=>{
    inputString+=x;
    console.log(inputString);
}
btn5Ref.addEventListener("click",()=>{
    updatePreview();
    check();
    setTimeout(()=>{
        
        if(i1Ref.innerText !== ""&&i2Ref.innerText !== ""&&i3Ref.innerText !== ""&&i4Ref.innerText !== ""&&i5Ref.innerText !== ""&&i6Ref.innerText !== ""&&i7Ref.innerText !== ""&&i8Ref.innerText !== ""&&i9Ref.innerText !== ""){
            mainInnerRef.style.display="none"
            scoreRef.style.display="block";
        }
    },5000)
});

function updatePreview(){
    if(inputString.length<3){
        updatePreview1();
    }
    if(inputString.length<4){
        updatePreview2();
    }
    if(inputString.length<5){
        updatePreview3();
    }
}

function updatePreview1() {
    if(inputString.length===2){
        let firstRow1=inputString.slice(0,1);
        i1Ref.innerText=firstRow1;
        let firstRow2=inputString.slice(1);
        i2Ref.innerText=firstRow2;
        inputString=[];
    }
}
function updatePreview2(){
    if(inputString.length===3){
        let secondRow1=inputString.slice(0,1);
        i3Ref.innerText=secondRow1;
        let secondRow2=inputString.slice(1,2);
        i4Ref.innerText=secondRow2;
        let secondRow3=inputString.slice(2);
        i5Ref.innerText=secondRow3;
        inputString=[];
    }
}
function updatePreview3(){
     if(inputString.length==4){
        let thirdRow1=inputString.slice(0,1);
        i6Ref.innerText=thirdRow1;
        let thirdRow2=inputString.slice(1,2);
        i7Ref.innerText=thirdRow2;
        let thirdRow3=inputString.slice(2,3);
        i8Ref.innerText=thirdRow3;
        let thirdRow4=inputString.slice(3);
        i9Ref.innerText=thirdRow4;
        inputString=[];
    }
}

const restart=()=>{
    const references = [
        i1Ref, i2Ref, i3Ref, i4Ref, i5Ref, i6Ref, i7Ref, i8Ref, i9Ref
    ];
    
    for (let x = 0; x < references.length; x++) {
        references[x].innerText = "";
    }
    
    mainInnerRef.style.display="block";
    scoreRef.style.display="none";
}

const check = () => {
    // Concatenate inner texts to form words
    const word1 = i1Ref.innerText + i2Ref.innerText;
    const word2 = i3Ref.innerText + i4Ref.innerText + i5Ref.innerText;
    const word3 = i6Ref.innerText + i7Ref.innerText + i8Ref.innerText + i9Ref.innerText;

    // Check if any word matches predefined words
    if (!(word1 === "OR" || word2 === "ROD" || word3 === "WORD")) {
        // Update elements for unsuccessful or incomplete state
        h1Ref.innerText = "Unsuccessful!";
        h1Ref.style.color = "red";
        const roundDiv = document.querySelector("#round+div");
        if (roundDiv) {
            roundDiv.innerText = "Incomplete!";
            roundDiv.style.color = "red";
        }
        const xmark1 = document.querySelector("#round > div > div:nth-child(1)");
        const xmark2 = document.querySelector("#round > div > div:nth-child(2)");
        if (xmark1 && xmark2) {
            xmark1.setAttribute("class", "xmark1");
            xmark2.setAttribute("class", "xmark2");
        }
        document.querySelector(".score>h3>span").innerText = ++l1-2;
    } else {
        // Update elements for successful state
        document.querySelector(".score>h3>span").innerText = ++l1-2;
        document.querySelector("header>div:nth-child(3)>span").innerText = ++l2-2;
    }
}
