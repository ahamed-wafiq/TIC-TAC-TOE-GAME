let boxes=document.querySelectorAll(".box")
let r =document.querySelector(".reset")
let newgbtn=document.querySelector("#new-game")
let msg=document.querySelector("#msg")
let msgcont=document.querySelector(".msg-cont")
let body=document.querySelector("body")
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let turn=true;
let count=0
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turn){
            box.innerText='X';
            turn=false;
            body.style.backgroundColor='#a59e8c';
        }
        else{
        box.innerText='O';
        turn=true;
        body.style.backgroundColor='cadetblue';}
        box.disabled=true;
        count+=1;
        checkdraw();
        checkWinner();
        
})
})
const checkdraw=()=>{
    if(count===9){
        msg.innerText =`Draw`;
        msgcont.classList.remove("hide");
    }
}
const reset=()=>{
    turn=true;
    count=0;
    enablebox();
    msgcont.classList.add("hide");
    body.style.backgroundColor='cadetblue';
}
const disablebox=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner) => {
    msg.innerText = `Congratulation,Winner is player-${winner}`;
    msgcont.classList.remove("hide");
    disablebox();
}
const checkWinner = () =>{
     for(let pattern of win){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos1 != "" && pos1 != ""){
            if(pos1 === pos2 && pos2=== pos3){
                showwinner(pos1);
            }
        }
            
        
     }
};
newgbtn.addEventListener("click", reset);
r.addEventListener("click", reset);