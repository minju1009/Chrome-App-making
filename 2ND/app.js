const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === ""){
        console.log("Please write your name");
    }else if(username.length > 15) {
        alert("Your name is too long");
    }

}

loginButton.addEventListener("click", onLoginBtnClick)