const ref = {
  i1: document.querySelector("#i1"),
  i2: document.querySelector("#i2"),
  i3: document.querySelector("#i3"),
  i4: document.querySelector("#i4"),
  i5: document.querySelector("#i5"),
  i6: document.querySelector("#i6"),
  i7: document.querySelector("#i7"),
  i8: document.querySelector("#i8"),
  b1: document.querySelector("#b1"),
  b2: document.querySelector("#b2"),
  b3: document.querySelector("#b3"),
  b4:document.querySelector("#b4"),
  b5:document.querySelector("#b5"),
  login:document.querySelector("#login"),
  signup:document.querySelector("#signup"),
  profile:document.querySelector("#profile"),
  modal2:document.querySelector("#modal2"),
  modal3:document.querySelector("#modal3"),
  modal_content:document.querySelector(".modal-content"),
  success1:document.querySelector("#modal1 .success"),
  success2:document.querySelector("#modal2 .success"),
  success3:document.querySelector("#modal3 .success"),
  unsuccess1:document.querySelector("#modal1 .unsuccess"),
  unsuccess2:document.querySelector("#modal2 .unsuccess"),
  unsuccess3:document.querySelector("#modal3 .unsuccess"),
  modal_header1:document.querySelector(".modal-header"),
  modal_body1:document.querySelector(".modal-body"),
  modal_footer1:document.querySelector(".modal-footer"),
  modal_header2:document.querySelector("#modal2 .modal-header"),
  modal_body2:document.querySelector("#modal2 .modal-body"),
  modal_footer2:document.querySelector("#modal2 .modal-footer"),
  modal_header3:document.querySelector("#modal3 .modal-header"),
  modal_body3:document.querySelector("#modal3 .modal-body"),
  modal_footer3:document.querySelector("#modal3 .modal-footer"),
  forget:document.querySelector("#b4"),
  closeUnsuccess1:document.querySelector("#modal1  div.unsuccess > button"),
  closeUnsuccess2:document.querySelector("#modal2  div.unsuccess > button"),
  closeUnsuccess3:document.querySelector("#modal3  div.unsuccess > button"),
  menuRef:document.querySelector(".menu-bar"),
};

const values = {
  uName: "",
  password: "",
  confirm_password:"",
  otp:111,
};

const successMsg=()=>{
    ref.success1.style.display="flex";
    ref.success2.style.display="flex";
    ref.success3.style.display="flex";
    ref.modal_header1.style.display="none";
    ref.modal_body1.style.display="none";
    ref.modal_footer1.style.display="none";
    ref.modal_header2.style.display="none";
    ref.modal_body2.style.display="none";
    ref.modal_footer2.style.display="none";
    ref.modal_header3.style.display="none";
    ref.modal_body3.style.display="none";
    ref.modal_footer3.style.display="none";
    ref.login.style.display="none";
    ref.signup.style.display="none";
    ref.profile.style.display="inline-block";
    console.log("Success");
}

const unSuccessMsg=()=>{
    ref.unsuccess1.style.display="flex";
    ref.unsuccess2.style.display="flex";
    ref.unsuccess3.style.display="flex";
    ref.modal_header1.style.display="none";
    ref.modal_body1.style.display="none";
    ref.modal_footer1.style.display="none";
    ref.modal_header2.style.display="none";
    ref.modal_body2.style.display="none";
    ref.modal_footer2.style.display="none";
    ref.modal_header3.style.display="none";
    ref.modal_body3.style.display="none";
    ref.modal_footer3.style.display="none";
    ref.b4.style.display="none";   
    console.log("Un-Success");
}

ref.login.addEventListener("click",()=>{
    closeUnsuccess();
});

ref.signup.addEventListener("click",()=>{
    closeUnsuccess();
})

ref.b4.addEventListener("click",()=>{
    closeUnsuccess();
})

const loginFn=()=>{
    closeUnsuccess();
    if(values.uName===ref.i1.value && values.password===ref.i2.value){
        successMsg();
    }else{
        unSuccessMsg();
    }
    console.log("Login");
    ref.i1.value = "";
    ref.i2.value = "";
    
};

const closeUnsuccess=()=>{
    ref.success1.style.display="none";
    ref.success2.style.display="none";
    ref.success3.style.display="none";
    ref.unsuccess1.style.display="none";
    ref.unsuccess2.style.display="none";
    ref.unsuccess3.style.display="none";
    ref.modal_header1.style.display="block";
    ref.modal_body1.style.display="flex";
    ref.modal_footer1.style.display="flex";
    ref.modal_header2.style.display="block";
    ref.modal_body2.style.display="flex";
    ref.modal_footer2.style.display="flex";
    ref.modal_header3.style.display="block";
    ref.modal_body3.style.display="flex";
    ref.modal_footer3.style.display="flex";
    ref.b4.style.display="block";
}

ref.closeUnsuccess1.addEventListener("click",()=>{
    closeUnsuccess();
})
ref.closeUnsuccess2.addEventListener("click",()=>{
    closeUnsuccess();
})
ref.closeUnsuccess3.addEventListener("click",()=>{
    closeUnsuccess();
})

const signupFn=()=>{
    closeUnsuccess();
    values.uName = ref.i3.value;
    if(ref.i4.value===ref.i5.value){
        values.password = ref.i4.value;
        values.confirm_password = ref.i5.value;
        successMsg();
        ref.login.style.display="inline-block";
        ref.profile.style.display="none";
        
    }else{
        unSuccessMsg();
        ref.login.style.display="inline-block";
        ref.unsuccess2.style.display="inline-block";
        ref.profile.style.display="none";
        
    }
    console.log("register");
    ref.i3.value = "";
    ref.i4.value = "";
    ref.i5.value = "";
};



const forgetPasswordFn = () => {
    closeUnsuccess();
    if(values.otp==i6.value && i7.value===i8.value){
        values.password = ref.i7.value; 
        ref.success3.style.display="flex";
        ref.modal_header3.style.display="none";
        ref.modal_body3.style.display="none";
        ref.modal_footer3.style.display="none";
        console.log("password set successfully");
    }else{
        unSuccessMsg();
        console.log("password not setted!");
    }
    console.log("Forget password !");
};

ref.b1.addEventListener("click", loginFn);
ref.b3.addEventListener("click", signupFn);
ref.b5.addEventListener("click", forgetPasswordFn);

const open=()=>{
    document.querySelector(".overlay-content").style.width="30%";
}

const close=()=>{
    document.querySelector(".overlay-content").style.width="0%";
}
