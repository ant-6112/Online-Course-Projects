
let main = document.getElementsByClassName('main')[0];

let j = 16;

const rainbow = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF7F00','#FF0000'];
function createGrid(j){
    for(let i = 0;i<j*j;i++){
        const divcell = document.createElement('div');
        divcell.setAttribute('class','grid');
        divcell.style.cssText = "height: 25px;width: 25px;border: 2px solid gray;";
        main.appendChild(divcell);
        divcell.onmouseenter = () => {
            divcell.style.cssText = 'background-color:' + rainbow[Math.floor(Math.random() * 7)] + ';';
        }
        divcell.onmouseleave = () => {
            divcell.onmouseenter = () => {
                //Process
            }
        }
    }
    main.style.cssText = "display: grid;grid-template-rows: repeat("+j+",27px);grid-template-columns: repeat(" + j+ ",27px);"
}

createGrid(j);

let but = document.getElementsByClassName('clear')[0];
but.onclick = () => {
    for(let p = 0;p<j*j;p++){
        main.removeChild(main.lastChild);
        //cell.style.cssText = "background-color:white;";
    }
    j = prompt("What is the Grid Size ?", 16);
    createGrid(j);
}

