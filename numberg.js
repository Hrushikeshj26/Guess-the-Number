let minNum = 1;
let maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const input = document.getElementById('userGuess');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');

checkBtn.addEventListener('click', () => {
    userNum = input.value;
    console.log(userNum);
    if(userNum < answer ){
        message.style.color = 'red';
        message.innerText = '🔻Too Low! Try again.';
    }else if(userNum > answer){
        message.style.color = 'red';
        message.innerText = '🔺Too High! Try again.';
    }
    else{
        message.style.color = 'green';
        message.innerText = '🎉You Won!';
    }
});