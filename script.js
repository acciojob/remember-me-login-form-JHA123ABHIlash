//your JS code here. If required.

let form=document.querySelector('form');
let checkbox=document.querySelector('#checkbox');
let username=document.querySelector('#username');
let password=document.querySelector('#password');
let existing=document.querySelector('#existing');
let body=document.querySelector('body');
let p=document.createElement('p');
body.appendChild(p);

existing.style.display='none';

form.addEventListener('submit',(e)=>{
	let user=username.value;
	let pass=password.value;
	
	e.preventDefault();
	p.innerHTML=checkbox.value;
	
	if(checkbox.checked){
		localStorage.setItem(`username`,user);
		localStorage.setItem(`password`,pass);
		alert(`Logged in as ${user}`);
	}else{
		 localStorage.removeItem("username");
	    localStorage.removeItem("password");
	}
	
	existing.style.display='block';

	existing.addEventListener('click',()=>{
		let saveduser = localStorage.getItem('username');
		alert(`Logged in as ${saveduser}`);
	})

	username.value = '';
	password.value = '';
})

