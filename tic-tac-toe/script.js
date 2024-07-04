let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContain = document.querySelector(".msgContain");
let msgText = document.querySelector("#msg")
let game=document.querySelector(".container");
let turnO = true;
let c=0;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () =>{
    console.log("button was clicked");
    turnO = true;
    c=0;
    enablebtns();
    msgContain.classList.add("hide");
    game.classList.remove("hide");

}

const enablebtns = () =>
    {
        for(let b of boxes)
            {
                b.disabled=false;
                b.innerText="";
            }
    }


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkW();
        c++;
        if(c==9)
            gameDraw();
    });
});

const checkW = () => {
    for (let pattern of winPatterns) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                anounce(p1);
            }
        }
    }
};

const anounce = (win) => {
    if (win === 'X') {
        msgText.innerText = "CONGRATULATIONS PLAYER 1 IS WINNER";
    }

    else {
        msgText.innerText = "CONGRATULATIONS PLAYER 2 IS WINNER";
    }
    msgContain.classList.remove("hide");
    disablebtns();
    game.classList.add("hide");
}

const disablebtns = () =>{
    for(let b of boxes)
        {
            b.disabled=true;
        }
}


const gameDraw = () => {
    msgText.innerText = `Game was a Draw.`;
    msgContain.classList.remove("hide");
    game.classList.add("hide");
    disableBoxes();
  };

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);