let colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];

const randomNUm = () => {
    let rndnum = Math.floor(Math.random() * 7);
    return rndnum;
}

const mycolors = () =>{
    let div = document.querySelectorAll('div');
    for(let i = 0; i < div.length; i++){
        div[i].style.background = colors[randomNUm()];

    }

}

setInterval(mycolors, 1000)


let ptag = document.querySelectorAll('p');
for (let x of ptag){
    x.setAttribute('class', 'txthead')
}


