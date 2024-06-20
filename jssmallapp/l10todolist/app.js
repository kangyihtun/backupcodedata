
// GET UI
var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',(e)=>{
    // console.log('hay');

    addnew();

    e.preventDefault();
});


var gettodos = JSON.parse(localStorage.getItem('todos'));
// console.log(gettodos);

if(gettodos){
    gettodos.forEach(gettodos=>addnew(gettodos));
}

function addnew(todo){
    
    let todotext = gettextbox.value;
    // console.log(todotext);

    if(todo){
        todotext = todo.text;
    }

    if(todotext){

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(todotext));
        // console.log(li);
        getul.appendChild(li);
        gettextbox.value='';
        gettextbox.focus();

        updatelocalstorage();

        li.addEventListener('click',function(){
            li.classList.toggle('completed');
        });

        li.addEventListener('contextmenu',function(e){
            li.remove();
            e.preventDefault();
    })


    }

    
}



function updatelocalstorage(){
    var getalllis = document.querySelectorAll('li');

    // console.log(getalllis);

    const todos = [];

    getalllis.forEach(getalllis=>{
        // console.log(getalllis.textContent);
        
        todos.push({
            text:getalllis.textContent,
            done:getalllis.classList.contains('completed')
        });
    });

    console.log(todos)

    localStorage.setItem('todos',JSON.stringify(todos));
}