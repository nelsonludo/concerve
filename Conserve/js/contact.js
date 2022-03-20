const uname = document.getElementById("user-name")
const email = document.getElementById("user-email")
const country = document.getElementById("user-country")
const comment = document.getElementById("comment")
const sendbtn = document.querySelector(".send-btn")
const contactForm = document.querySelector("form")


function ValidateInput(){
    if(uname.value.trim() === ""){
        let  message = document.getElementById("msg1")
        message.style.visibility = "visible";
    }else{
        let  message = document.getElementById("msg1")
        message.style.visibility = "hidden";
    }

    if(email.value.trim() === ""){
        let  message = document.getElementById("msg2")
        message.style.visibility = "visible";
    }else{
        if (!isvalidEmail(email.value.trim())){
            let  message = document.getElementById("msg2")
            message.style.visibility = "visible";
            message.innerHTML = "This email is not valid";
        }else{
            let  message = document.getElementById("msg2")
            message.style.visibility = "hidden";
        }
    } 

    if(country.value.trim() === ""){
        let  message = document.getElementById("msg3")
        message.style.visibility = "visible";
    }else{
        let  message = document.getElementById("msg3")
        message.style.visibility = "hidden";
        
    } 

    if(comment.value.trim() === ""){
        let  message = document.getElementById("msg4")
        message.style.visibility = "visible";
    }else{
        let  message = document.getElementById("msg4")
        message.style.visibility = "hidden";
    } 
}

sendbtn.addEventListener("click", () => {
    event.preventDefault();
    ValidateInput();
});

function isvalidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}