const items = document.querySelectorAll('.item');
const OText = 'O';
const XText = 'X';
let active = true; 
const restartBtn = document.getElementById('restart');
let currentPlayer = OText;
const playText = document.getElementById('playText');
const boardItems = new Array(9).fill(null);
Array.from(items)
let board = (()=> {
    if(active ){
    items.forEach((item) => {
        item.addEventListener('click', itemClicked)
    })
    }
});

const itemClicked = (e) => {
    if(active){
    const id = e.target.id;
    console.log(id)
    if (!boardItems[id]) {
        boardItems[id] = currentPlayer;
        e.target.innerText = currentPlayer;
    }
        if (playeWon()) {
            playText.innerText = `${currentPlayer} has won!`;
             active=false;
            return;
        }
        let tie = !boardItems.includes(null);
        if(tie){
            playText.innerText = 'it\'s a tie!'
            active=false;
            return; 
        }
        
        currentPlayer = currentPlayer == OText ? XText : OText;
    }
};


const playeWon = () => {
    if (boardItems[1] === currentPlayer && boardItems[4] === currentPlayer && boardItems[7] === currentPlayer) {
        items[1].style.color='blue'
        items[4].style.color='blue'
        items[7].style.color='blue'
        return true;
    }
    if(boardItems[3]===currentPlayer && boardItems[4]===currentPlayer && boardItems[5]=== currentPlayer){
        items[3].style.color='blue'
        items[4].style.color='blue'
        items[5].style.color='blue'
        return true; 
      }
    if (boardItems[2] === currentPlayer && boardItems[5] === currentPlayer && boardItems[8] === currentPlayer) {
        items[2].style.color='blue'
        items[5].style.color='blue'
        items[8].style.color='blue'
        return true;
    }
    if (boardItems[6] === currentPlayer && boardItems[7] === currentPlayer && boardItems[8] === currentPlayer) {
        items[6].style.color='blue'
        items[7].style.color='blue'
        items[8].style.color='blue'
        return true;
    }
    if (boardItems[2] === currentPlayer && boardItems[4] === currentPlayer && boardItems[6] === currentPlayer) {
        items[2].style.color='blue'
        items[4].style.color='blue'
        items[6].style.color='blue'
        return true;
    }

    if (boardItems[0] === currentPlayer) {
        if (boardItems[1] === currentPlayer && boardItems[2] === currentPlayer) {
            items[0].style.color='blue'
            items[1].style.color='blue'
            items[2].style.color='blue'
            return true;
        }
        if (boardItems[3] === currentPlayer && boardItems[6] === currentPlayer) {
            items[0].style.color='blue'
            items[3].style.color='blue'
            items[6].style.color='blue'
            return true;
        }
        if (boardItems[4] === currentPlayer && boardItems[8] === currentPlayer) {
            items[0].style.color='blue'
            items[4].style.color='blue'
            items[8].style.color='blue'
            return true;
        }
    }
}



const restart = () =>{
    items[0].style.color='green';
    items[1].style.color='green';
    items[2].style.color='green';
    items[3].style.color='green';
    items[4].style.color='green';
    items[5].style.color='green';
    items[6].style.color='green';
    items[7].style.color='green';
    items[8].style.color='green';
     active=true; 
     boardItems.forEach((space, index)=>{
        boardItems[index]=null;
    })
    items.forEach((item)=>{
    item.innerText ='';
    })
    playText.innerText = ''; 
    currentPlayer = OText;
}

restartBtn.addEventListener('click', restart);
restart()
board();


