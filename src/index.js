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
// winner celebration video
let confit = document.getElementById("confit_outer");
let confit_vdo = document.getElementById("confit_vdo");

// looser celebration video
let confit2 = document.getElementById("confit_outer2");
let confit_vdo2 = document.getElementById("confit_vdo2");

// Draw celebration video
let confit3 = document.getElementById("confit_outer3");
let confit_vdo3 = document.getElementById("confit_vdo3");


document.getElementById("score").innerText = player_score;

const game_starts=(index)=>{
    index += 1;
    let computer = computer_play();
    if(index == computer) {
        confit3.style.display = "block";
        confit_vdo3.play();
        setTimeout(() => {
            confit3.style.display = "none";
        }, 2300);
    }
    else if(index == 1)
            if(computer == 2){
                confit2.style.display = "block";
                confit_vdo2.play();
                setTimeout(() => {
                    confit2.style.display = "none";
                }, 2300);
                player_score = 0;
            }
            else{
                confit.style.display = "block";
                confit_vdo.play();
                setTimeout(() => {
                    confit.style.display = "none";
                }, 2500);
                ++player_score;
            }
    else if(index == 2)
            if(computer == 3){
                confit2.style.display = "block";
                confit_vdo2.play();
                setTimeout(() => {
                    confit2.style.display = "none";
                }, 2300);
                player_score = 0;
            }
            else{
                confit.style.display = "block";
                confit_vdo.play();
                setTimeout(() => {
                    confit.style.display = "none";
                }, 2500);
                ++player_score;
            }
    else if(index == 3)
            if(computer == 1){
                confit2.style.display = "block";
                confit_vdo2.play();
                setTimeout(() => {
                    confit2.style.display = "none";
                }, 2300);
                player_score = 0;
            }
            else{
                confit.style.display = "block";
                confit_vdo.play();
                setTimeout(() => {
                    confit.style.display = "none";
                }, 2500);
                ++player_score;
            }
    document.getElementById("score").innerText = player_score;
    
}

option.map((cur_elem,index)=>{
    document.getElementById(`${cur_elem}`).addEventListener('click',()=>{
        game_starts(index);
    })
})

