const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
const phoneno=document.getElementById("phoneno");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs();
// });
function checkInputs(){
    let check = false;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const phonenoValue = phoneno.value;
    // if(usernameValue === "" ||emailValue === "" ||passwordValue === ""||password2Value === ""||phonenoValue === ""){
    //     alert("Fields can not be empty");
    // }
    if(usernameValue === ""){
        alert("Username cannot be blank");
        check= false;
    } else{
        check = true;
        
    }
    if(emailValue === ""){
        alert("Email cannot be blank");
        check= false;
    } else if(!isEmail(emailValue)){
        alert("Email is not valid");
        check= false;
    } else {  
        
        check= true;
    }

    if(passwordValue === ""){
        check= false;
        alert("Password cannot be blank");
    } else if(passwordValue.length < 8){
        alert("Password should contain minimum 8 characters");
        check= false;
    } else {    
    
        check= true;
    }
    if(password2Value === ""){
        alert("Confirm Password cannot be blank");
        check = false;
    } else if(password2Value.length < 8){
        alert("Password should contain minimum 8 characters");
        check = false;
    } else if(passwordValue !== password2Value) {
        alert( "Passwords doesn't match");
        check = false;
    } else {    
        
        check = true;
    }
    if(phonenoValue === ""){
        alert("Phone number cannot be blank");
        check = false;
    } else if(!isPhoneNo(phonenoValue)) {
        alert("Phone number is not valid");
        check = false;
    } else { 
         
         check = true;    
    }
    if(check === true){
        alert("Validation success");
        return true;
    }
    
}

function isEmail(email){
    return /^([\w\.]+)@([\w]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/.test(email);
}
function isPhoneNo(phoneno) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneno); 
            
}
function validatePassword(password) {
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = "Poor";
            color = "red";
            break;
        case 3:
            strength = "Medium";
            color = "orange";
            break;
        case 4:
            strength = "Strong";
            color = "green";
            break;
    }
    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}    
