// UI 

const openbtn = document.querySelector('.openbtn');
const closebtn = document.querySelector('.close-btn');
const getsidebar = document.querySelector('.nav-leftsidebar');

openbtn.addEventListener('click',function(){
    getsidebar.classList.add("visible");
});

closebtn.addEventListener('click',function(){
    getsidebar.classList.remove("visible");
});

// 19OV 