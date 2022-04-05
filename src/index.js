let rule_btn = document.getElementById("rule_in");
let close_btn = document.getElementById("close");

rule_btn.addEventListener('click',()=>{
    document.getElementById("rule_outer_trans").style.display = 'block'
})

close_btn.addEventListener('click',()=>{
    document.getElementById("rule_outer_trans").style.display = 'none'
})



let option = [
    "rock",     //  1
    "paper",    //  2
    "scissor"   //  3
]

let player_score = 0;

const computer_play =()=>{
    let computer = Math.floor(Math.random()*10);

    if(computer < 4) return 1;
    else if(computer <7) return 2;
    else return 3;
}



document.getElementById("score").innerText = player_score;

const game_starts=(index)=>{
    index += 1;
    let computer = computer_play();
    if(index == computer) {
        alert("Draw");
    }
    else if(index == 1)
            if(computer == 2){
                alert("You loss");
                player_score = 0;
            }
            else{
                alert("you win");
                ++player_score;
            }
    else if(index == 2)
            if(computer == 3){
                alert("You loss");
                player_score = 0;
            }
            else{
                alert("you win");
                ++player_score;
            }
    else if(index == 3)
            if(computer == 1){
                alert("You loss");
                player_score = 0;
            }
            else{
                alert("you win");
                ++player_score;
            }
    document.getElementById("score").innerText = player_score;
    
}

option.map((cur_elem,index)=>{
    document.getElementById(`${cur_elem}`).addEventListener('click',()=>{
        game_starts(index);
    })
})

