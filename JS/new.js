//DOM MANIPULATION

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hi there!</strong> You've read an important Message."

document.body.append(div);


let p = document.createElement('p');
p.innerHTML = 'Hi there';
document.querySelector('h1').append(p);

ol.before('Number List');

ol.after('After List items');

// let li = document.createElement('li');
// li.innerHTML = 'prepending';
// ol.prepend(li);

let li = document.createElement('li');
li.innerHTML = 'append';
ol.append(li);

setTimeout(()=> div.remove(), 3000);