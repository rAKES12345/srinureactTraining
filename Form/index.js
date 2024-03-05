const loginUsernameRef = document.querySelector("#loginUsername");
const loginPasswordRef = document.querySelector("#loginPassword");
const regUsernameRef = document.querySelector("#regUsername");
const regPasswordRef1 = document.querySelector("#regPassword1");
const regPasswordRef2 = document.querySelector("#regPassword2");
const password1 = document.querySelector("#fpassword1");
const password2 = document.querySelector("#fpassword2");
const login = document.querySelector("#myModal1 input.close");
const register = document.querySelector("#myModal2 input[type=button]");
const setPassword = document.querySelector("#myModal3 input[type=button]");

let loginDetails = {
    username: "",
    password: ""
};

// Event listener for register button
register.addEventListener("click", () => {
    if(regPasswordRef1.value===regPasswordRef2.value){
    loginDetails.username = regUsernameRef.value;
    loginDetails.password = regPasswordRef1.value;
    alert("Registered Successfully")
    console.log("Registered:", loginDetails);
    }else{
        alert("check Your Details!")
    }
    
    // Clear registration input fields
    regUsernameRef.value = "";
    regPasswordRef1.value = "";
    regPasswordRef2.value = "";
});

// Event listener for login button
login.addEventListener("click", () => {
    const inputUserName = loginUsernameRef.value;
    const inputPassword = loginPasswordRef.value;
    
    if (inputUserName === loginDetails.username && inputPassword === loginDetails.password) {
        alert("Welcome");
        console.log("Logged in:", loginDetails);
    } else {
        alert("Enter correct credentials");
    }

    // Clear login input fields
    loginUsernameRef.value = "";
    loginPasswordRef.value = "";
});

// Event listener for set password button
setPassword.addEventListener("click", () => {
    if (password1.value === password2.value) {
        loginDetails.password = password1.value;
        console.log("Password updated:", loginDetails);
    } else {
        alert("Passwords do not match");
    }

    // Clear password setting input fields
    password1.value = "";
    password2.value = "";
});
