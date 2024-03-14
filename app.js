let gameseq=[];
let userseq=[];

let btns=["red","yellow","green",  "purple"];

let started=false;
let level =0;

let h2=document.querySelector("h2")

document.addEventListener("keypress" ,function(){
    if(started==false){
        console.log("Game started");
        started=true;

        levelup();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);   
    btnflash(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        console.log("Same value");
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
