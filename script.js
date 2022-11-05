const todos = [{
    title: 'Get groceries',
    dueDate: '2022-10-26'
}, { 
    title: 'Wash car',
    dueDate: '2022-10-28'
}, {
    title: 'Make dinner',
    dueDate: '2022-10-29'
}];

render ();

function addTodo(){
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;
    todos.push({
        title: title,
        dueDate: dueDate
    });

    render();
}

function render() {
    document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function (todo){
        const element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;  
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    }); 
}




