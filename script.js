
let music = new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
const changeTurn = ()=>{
    return turn === "X" ? "O" : "X";
}

const checkWin = (boxtext)=>{
    let win = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ];
win.forEach(e => {
    if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText == boxtext[e[2]].innerText && boxtext[e[0]].innerText !==''){
        document.getElementsByClassName('info')[0].innerText = boxtext[e[0]].innerText + " win";
        isgameover = true;
        document.querySelector('.imgbox').style.width = '150px';
        document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector('.line').style.width = `30vw`;
    }
});

}

reset.addEventListener('click',()=>{
        isgameover = false;
        document.querySelector('.imgbox').style.width = '0px';
        turn = 'X';
        if(!isgameover){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        }
        document.querySelector('.line').style.width = `0vw`;
   
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
let boxtext = element.querySelector('.boxtext');
    boxtext.innerText='';
});
})


let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
let boxtext = element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    console.log("click");
    if(boxtext.innerText ===''){
        boxtext.innerText = turn;
        turn = changeTurn();
        turnmusic.play();
        checkWin(boxes);
        if(!isgameover){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        }
    }
}) 
});