let gameSeq=[];
let userSeq=[];
let boxes=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(event){
    if(event.code=="Enter" && started==false){
        
        console.log("Game Started");
        started=true;

        levelUp(); 
    }
});

function gameFlash(button){//This button is only for taking inputs
    button.classList.add("gameFlash");
    setTimeout(function(){
        button.classList.remove("gameFlash");
    },300);
};
function userFlash(button){//This button is only for taking inputs
    button.classList.add("userFlash");
    setTimeout(function(){
        button.classList.remove("userFlash");
    },300);
};

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level} </br>Press the flashed buttons`;

    let randIndx=Math.floor(Math.random() * 4);
    let randColor=boxes[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(userSeq);
    gameFlash(randBtn);
};

function checkBtn(index){
    if(userSeq[index] === gameSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        };
    }else{
        h2.innerHTML=`Game Over!Your score is <b>${level}</b> <br>Press enter to start`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="antiquewhite";
        },150);
        reset();
    }
};
function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkBtn(userSeq.length-1);
};
let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
};
