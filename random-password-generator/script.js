const str = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_?~/"
console.log(str.length);

const inputEl = document.getElementById("pass");
const buttonEl = document.querySelector("button");
const copy_iconEl = document.querySelector("i")
const notification=document.querySelector(".alert")

const pass_length=10;

function generatePassword() {
    let pass="";
    let randomNum;
    for (let i = 0; i<pass_length; i++){
        
        randomNum = Math.floor(Math.random() * str.length);
        pass += str[randomNum]
        
    }

    inputEl.value=pass;
    console.log(pass)
    
}

buttonEl.addEventListener("click", () => {
    generatePassword();
})

copy_iconEl.addEventListener("click", () => {
    inputEl.select()
    if (inputEl.value) {

        navigator.clipboard.writeText(inputEl.value)
        notification.innerText = inputEl.value +" Copied!";
        notification.classList.remove("hidden")

        setTimeout(() => {
            notification.classList.add("hidden")
        },2000)
        
    }


})
