

let form = document.querySelector('#addTask');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let taskField = form.elements['task'];
    let taskData = {
        task: taskField.value
    }
    taskField.value = '';

    fetch('/todo/add/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
    })
    .then(res => {
        console.log('Responce: ', res); 
        return res.json();       
    }).then( data => {
        let {error, todo} = data;
        if(error){
            alert(error);  return;
        }
        let taskHTML = `<li id="${todo.id}">${todo.task}</li>`;
        document.querySelector('#taskList').insertAdjacentHTML('afterbegin', taskHTML);
    })
    .catch( e => {
        console.log(e.message);
    })
});