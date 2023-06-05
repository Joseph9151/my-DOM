mo.addEventListener('mouseover', ()=>{
    document.body.style.backgroundColor = 'green'
});

mo.addEventListener('mouseout', ()=>{
    document.body.style.backgroundColor = 'grey'
});

mo.addEventListener('mousedown', ()=>{
    
    mo.insertAdjacentHTML('afterend', "<h4>You just clicked me, don't release please</h4>")

});
mo.addEventListener('mouseup', ()=>{
    
    mo.insertAdjacentHTML('beforebegin', "<h4>Come on, Why did you release me</h4>")

});

dblc.addEventListener('dblclick', ()=>{
    alert('You just double clicked me')

});
function testa(e) {
    e.preventDefault();
    document.querySelector('#opts').style.display = 'block';
}

document.querySelector('#context').addEventListener('contextmenu',testa);

let remove = ()=> {
    if(document.querySelector('#opts').style.display == 'block') {
     document.querySelector('#opts').style.display = 'none';
    }
}

document.querySelector('#context').addEventListener('click', remove)


let colors = ['green', 'grey', 'yellow', 'blue', 'black', 'pink', 'red']

mousemoves.onmousemove = function() {
    let rand = Math.floor(Math.random()*4)
    for(let x in colors){
        round.style.backgroundColor = colors[rand];
    }
}