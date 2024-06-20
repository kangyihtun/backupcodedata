// UI 
const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
const getboxtitle = document.getElementById('boxtitle');


getbox.addEventListener('click',function(e){
    // console.log('hay');

    // getbtns.classList.toggle("show");
    getbtns.classList.add("show");

    smallmenu(e.target);
});

getbox.addEventListener('dblclick',function(){
    getbtns.classList.remove("show");
});

function smallmenu(ele){
    // console.log(ele);

    if(ele.classList.contains('btn-icon')){
        // console.log("yes");

        const geturl = ele.getAttribute("data-link");
        // console.log(geturl);
        window.location.href = geturl;

    }else if(ele.classList.contains('icn')){

        const geturl = ele.parentElement.getAttribute("data-link");
        // console.log(geturl);
        window.location.href = geturl;

    } else{
        // console.log("no");
    }
}

dragme(getbox);

function dragme(box){
    // console.log(box);

    let getcx,getcy,setcx,setcy;

    // console.log("i am main dragme function");

    if(getboxtitle){
        getboxtitle.onmousedown = mousedown;
    }


    function mousedown(e){
        console.log("i am mousedown function");
        // console.log(e.target);

        getcx = e.clientX;
        getcy = e.clientY;
        console.log('setp 1 = ',getcx,getcy)

        document.onmousemove = dragnow;
        document.onmouseup = stopdrag;
    }

    function dragnow(){
        console.log("i am dragme function");

        setcx = getcx - e.clientX;
        setcy = getcy - e.clientY;

        console.log('step 2 = ',setcx,setcy);

        getcx = e.clientX;
        getcy = e.clientY;

        const btnleft =  box.offsetLeft;
        const btntop = box.offsetTop;

        // console.log(btnleft,btntop); 
        // console.log(btnleft-setcx,btntop-setcy); 

        box.style.left = (btnleft-setcx) + "px";
        box.style.top = (btntop-setcy) + "px";

    }

    function stopdrag(){
        console.log("i am stopdrag function");
        document.onmousemove = null;
        document.onmouseup = null;

    }
}