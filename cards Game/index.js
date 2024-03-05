const cardRef=document.querySelectorAll("#card");
const hiddenCardsRef=document.querySelectorAll(".card-back");
const mainInnerRef=document.querySelector(".main_inner");

const hide=()=>{
    for(let i=0;i<cardRef.length;i++){
    cardRef[i].classList.add("card-back");
    mainInnerRef.style.flexDirection="row-reverse";
    }
}

const show=()=>{
    for(let i=0;i<cardRef.length;i++){
        cardRef[i].classList.remove("card-back");
        mainInnerRef.style.flexDirection="row";
        }
}

for(let i=0;i<cardRef.length;i++){
cardRef[i].addEventListener('click',(event)=>{
        event.target.classList.remove("card-back");
});
}