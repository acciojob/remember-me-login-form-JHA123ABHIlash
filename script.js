//your JS code here. If required.

let form=document.querySelector('form');
let checkbox=document.querySelector('#checkbox');
let username=document.querySelector('#username');
let password=document.querySelector('#password');
let existing=document.querySelector('#existing');


if(localStorage.getItem("username")){
    existing.style.display = "block";
}

existing.addEventListener('click',()=>{
    let saveduser = localStorage.getItem('username');
    alert(`Logged in as ${saveduser}`);
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let user = username.value;
    let pass = password.value;

    alert(`Logged in as ${user}`);

    if(checkbox.checked){
        localStorage.setItem("username",user);
        localStorage.setItem("password",pass);
        existing.style.display = "block";
    }else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }

    username.value = '';
    password.value = '';
});