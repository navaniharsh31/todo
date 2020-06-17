const add = document.querySelector('.add');
const todoInput = document.querySelector('.inp');
const dateInput = document.querySelector('.date');
const ul = document.querySelector('.todo-list');
const searchInput = document.querySelector('.search input')

const addHTML = (todo,date) =>{

    const HTML = `
        <div class="todo">
            <li>${todo}</li>
            <p class="date">${date}</p>
            <img src="./images/thumb_up-24px.svg" alt="" class="done" />
            <img src="./images/delete-24px.svg" alt="" class="delete" />
        </div>
    `;

    ul.innerHTML += HTML;

};


add.addEventListener('click', e =>{

    e.preventDefault();
    const todo = todoInput.value.trim();
    const date = dateInput.value;

    if(!todo.length){
        alert("Empty task!")
    }else{
        addHTML(todo,date);
        todoInput.value='';
        dateInput.value='';
    }
});

ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

ul.addEventListener('click', e => {
    if(e.target.classList.contains('done')){
        e.target.parentElement.classList.toggle('todo-done');
    }
});

const filter = (search) =>{
    Array.from(ul.children)
        .filter((x)=> !x.textContent.includes(search))
        .forEach((x)=> x.classList.add('hidden'));
    Array.from(ul.children)
        .filter((x)=> x.textContent.includes(search))
        .forEach((x)=> x.classList.remove('hidden'));
  
 };

searchInput.addEventListener('keyup', () =>{

    const search = searchInput.value.trim();
    filter(search);
});