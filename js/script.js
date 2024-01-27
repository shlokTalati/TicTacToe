var btn = [];
var result, winner,loser,header;
var count = 0;
var flag = 0;
var i = 0;

btn[0] = document.getElementById("btn1");
btn[1] = document.getElementById("btn2");
btn[2] = document.getElementById("btn3");
btn[3] = document.getElementById("btn4");
btn[4] = document.getElementById("btn5");
btn[5] = document.getElementById("btn6");
btn[6] = document.getElementById("btn7");
btn[7] = document.getElementById("btn8");
btn[8] = document.getElementById("btn9");
result = document.getElementById("result");
header = document.getElementById("header");

function check(i) {
    //This if is used to ensure that we select already selected box again
    if (btn[i].innerHTML == "") {

        if (flag == 0) {
            flag = 1;
            btn[i].innerHTML = "X"
            btn[i].className = "btn m-1 btn-outline-danger"
            count++;
        }
        else {
            flag = 0;
            btn[i].innerHTML = "O";
            btn[i].className = "btn m-1 btn-outline-info"
            count++;
        }

        if (count > 4) {

            if (btn[0].innerHTML == btn[1].innerHTML && btn[1].innerHTML == btn[2].innerHTML && btn[0].innerHTML != "") {
                winDecider();
                animateResult();
                if(flag==0){
                    btn[0].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[1].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[2].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[0].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[1].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[2].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (btn[3].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[5].innerHTML && btn[3].innerHTML != "") {
                winDecider();
                animateResult();
                if(flag==0){
                    btn[3].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[5].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[3].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[5].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (btn[6].innerHTML == btn[7].innerHTML && btn[7].innerHTML == btn[8].innerHTML && btn[6].innerHTML != "") {

                winDecider();
                animateResult();
                if(flag==0){
                    btn[6].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[7].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[8].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[6].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[7].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[8].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (btn[0].innerHTML == btn[3].innerHTML && btn[3].innerHTML == btn[6].innerHTML && btn[0].innerHTML != "") {
                winDecider();
                animateResult();
                if(flag==0){
                    btn[0].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[3].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[6].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[0].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[3].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[6].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (btn[1].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[7].innerHTML && btn[1].innerHTML != "") {
                winDecider();
                animateResult();
                if(flag==0){
                    btn[1].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[7].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[1].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[7].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (btn[2].innerHTML == btn[5].innerHTML && btn[5].innerHTML == btn[8].innerHTML && btn[2].innerHTML != "") {
                winDecider();
                animateResult();
                if(flag==0){
                    btn[2].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[5].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[8].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[2].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[5].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[8].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (btn[0].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[8].innerHTML && btn[0].innerHTML != "") {
                winDecider();
                animateResult();
                if(flag==0){
                    btn[0].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[8].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[0].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[8].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (btn[2].innerHTML == btn[4].innerHTML && btn[4].innerHTML == btn[6].innerHTML && btn[2].innerHTML != "") {
                winDecider();
                animateResult();
                if(flag==0){
                    btn[2].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-info gameBtnAnimate"
                    btn[6].className = "btn m-1 btn-info gameBtnAnimate"    
                }
                else{
                    btn[2].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[4].className = "btn m-1 btn-danger gameBtnAnimate"
                    btn[6].className = "btn m-1 btn-danger gameBtnAnimate"    
                }
            }
            else if (count == 9) {
                result.innerHTML = "Tie";
                animateResult();
            }
        }

    }

}

function resetGame() {
    flag=0;
    count = 0;
    for (i = 0; i < 9; i++) {
        btn[i].innerHTML = "";
        btn[i].className = "btn m-1 btn-outline-light"
    }
    header.className = "text-center bg-dark text-white pt-3 m-0 border-bottom resultAnimate" ;
    result.innerHTML = "&nbsp;";
    result.className = "text-info";
}
function winDecider() {
    if (flag == 0) {
        winner = "O";
        loser = "X";
    }
    else {
        winner = "X";
        loser = "O";
    }
    result.innerHTML = winner+ " Wins :)";
    for(i=0;i<9;i++){
        if(btn[i].innerHTML == ""){
            btn[i].innerHTML = " ";
        }
    }
}

function animateBtn(i) {
        console.log(btn[i].classList);
        // btn[i].className = "btn m-1 btn-outline-warning gameBtnAnimate";
        btn[i].classList.add("gameBtnAnimate");
    }
    function animateResult(){
        if(flag == 0){
            result.className = "text-info resultAnimate";
            header.className = "text-center bg-dark text-info pt-3 m-0 border-bottom resultAnimate" ;
        }
        else{
            result.className = "text-danger resultAnimate";
            header.className = "text-center bg-dark text-danger pt-3 m-0 border-bottom resultAnimate";

        }
}

