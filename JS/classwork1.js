// let task = prompt('Enter task');
// let ul = document.createElement('ul')
// document.body.append(ul)
// while(task) {
//     let li = document.createElement('li');
//     li.innerHTML = task;
//     ul.append(li);
//     task = prompt('Enter task')

// }


let ul = document.querySelector('#items');
let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let h1 = document.querySelector('h1')
let div;
//item

const inputHandler = () => {
    return input.value;
}

const notify = ()=>{
    div = document.createElement('div');
    div.className = 'notify';
    div.innerHTML = `<strong>Hi there!</strong> ${inputHandler()} has been added to your list`;
    h1.before(div);
    // setTimeout(()=> div.remove(), 2000);


}

const addHandler = () => {
    let li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = inputHandler();
    ul.append(li)
    notify()
    input.value = '';

    setTimeout(()=> div.remove(), 2000);

}


