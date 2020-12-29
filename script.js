let player_x = 1;
let win = 0;

let btn = document.querySelectorAll('button');
for (item of btn) {
    item.addEventListener('click', (e) => {
        if (player_x) {
            if (e.target.innerHTML == '_' && win == 0) {
                e.target.innerHTML = 'x';
                player_x = 0;
                condition('x');
            }
        }
        else {
            if (e.target.innerHTML == '_' && win == 0) {
                e.target.innerHTML = 'o';
                player_x = 1;
                condition('o');
            }
        }
    })
}
function innerhtmlchange(value) {
    document.getElementById('gameWinner').innerHTML = `Winner : Player - ${value} win`;
    document.getElementById('gamestatus').innerHTML = `status : Game over`;
    win = 1;
}
function condition(value) {
    //for row
    for (i = 0; i < 7 && win!=1; i+= 3) {
        if (btn[i].innerText == value && btn[i + 1].innerText == value && btn[i + 2].innerText == value) {
            innerhtmlchange(value); 
        }
    }
    //for column
    for (i = 0; i < 3 && win!=1; i++) {
        if (btn[i].innerText == value && btn[i + 3].innerText == value && btn[i + 6].innerText == value) {
            innerhtmlchange(value);
        }
    }
    //for cross
    if (btn[0].innerText == value && btn[4].innerText == value && btn[8].innerText == value) {
        innerhtmlchange(value);
    }
    if (btn[2].innerText == value && btn[4].innerText == value && btn[6].innerText == value) {
        innerhtmlchange(value);
    }
    // for Tie
    if (btn[0].innerText != '_' && btn[1].innerText != '_' && btn[2].innerText != '_' && btn[3].innerText != '_' && btn[4].innerText != '_' && btn[5].innerText != '_' && btn[6].innerText != '_' && btn[7].innerText != '_' && btn[8].innerText != '_' && win!=1n) {
        document.getElementById('gamestatus').innerHTML = `---Tie--- no one win`;
        document.getElementById('gameWinner').innerHTML = `Winner : ---Tie---`;
        win = 1;
    }
}
//for reset game 
let resetgame = document.getElementById('resetbtn');
resetgame.addEventListener('click', () => {
    for (item of btn) {
        item.innerHTML = '_';
    }
    document.getElementById('gamestatus').innerHTML = `status : Game playing...`;
    document.getElementById('gameWinner').innerHTML = `Winner : Not Declare`;
    resetgame.innerHTML = "Reset Game";
    win = 0;
});