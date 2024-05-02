// get necessery element from html file


const form = document.querySelector("#form");
const username = document.querySelector("input[name='username']");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");



// submit button operation

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validateInputs();
});

// validation logics

function validateInputs(){
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const passwordVal = password.value.trim();
const cPasswordVal = cPassword.value.trim();

if(usernameVal === ""){
    setError(username, "Username is required")
}else{
    setSuccess(username)
}

if(emailVal === ""){
    setError(email, "Email is required")
}else if(!validateEmail(emailVal)){
    setError(email, "Please enter a valid email")
}else{
    setSuccess(email)
}

if(passwordVal === ""){
    setError(password,"Password is required")
}else if(passwordVal.length<8){
    setError(password,"Password mut be atleaset 8 characters long")
}else{
    setSuccess(password)
}

if(cPasswordVal === ""){
    setError(cPassword,"Confirm password is required")
}else if(cPasswordVal !== passwordVal){
    setError(cPassword,"Password does not match")
}else{
    setSuccess(cPassword)
}
}

// To show error
// element - password, message - Password is required

function setError(element,message){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector(".error")

    errorElement.innerText = message;
    inputgroup.classList.add("error")
    inputgroup.classList.remove("success")
}

function setSuccess(element){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector(".error")

    errorElement.innerText = "";
    inputgroup.classList.add("success")
    inputgroup.classList.remove("error")
}

const validateEmail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );
};
