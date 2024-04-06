function validateForm(){

    const submitButton = document.getElementById("submit");
    const message = document.getElementById("message-panel");
    submitButton.addEventListener("click", function validate(event){
        event.preventDefault();
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const feedback = document.getElementById("feedback").value;
        if(!fname || !lname || !email || !phone || !feedback){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "missing a input";
        }
        else if(!email.endsWith("@bob.com")){
            message.style.backgroundColor = "red";
            message.style.color = "white";
            message.innerHTML = "email is not a @bob.com email";
        }
        else{
            message.style.backgroundColor = "lightgreen";
            message.style.color = "white";
            message.innerHTML = "submission success";
        }   
    });
}

function alertSystem(){
    const alertButton = document.getElementById("alert");
    alertButton.addEventListener("click", function validate(event){
        alert("hey dude thanks for clcking me, appreciate it. i dont get much work nowadays yknow");
    });
}

validateForm();
alertSystem();