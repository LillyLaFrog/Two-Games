const choices = document.querySelector('.choices');
const resultIMG = document.querySelector('#coin-result');
const coinComment = document.querySelector('#coin-comment');

let winCount = 0;
let loseCount = 0;
//flip a coin and output result, heads = 1 tails = 0
const flipCoin = () => Math.round(Math.random());
//output the results to the display
const displayCoin= (guess,actual) => {
    let win = false;
    let template = '';
    coinComment.classList.add('hidden');
    choices.classList.add('hidden');
    resultIMG.setAttribute('src','img/spinningCoin.gif');
    if(guess === actual){win=true;}
    setTimeout(()=>{
        coinComment.classList.remove('hidden');
        choices.classList.remove('hidden');
        if(guess===1){
            template +='<p>You chose heads</p>';
        }else{
            template +='<p>You chose tails</p>';
        };
        if(actual===1){
            resultIMG.setAttribute('src','img/heads.jpg');
            template +='<p>The toss is heads</p>';
        }else{
            resultIMG.setAttribute('src','img/tails.jpg');
            template += '<p>The toss is tails</p>'
        };
        if(win){
            winCount++;
            template += '<p>You chose wisely!</p>'
        }else{
            loseCount++;
            template += '<p>Sorry, wrong choice</p>'
        }
        template += `<p>Wins:${winCount} Losses:${loseCount}</p>`
        coinComment.innerHTML = template;
    },2000);
}

choices.addEventListener('click',(e)=>{
    toss=flipCoin();
    if(e.target.id === 'heads'){
        displayCoin(1,toss)
    }else{
        displayCoin(0,toss);
    }
});