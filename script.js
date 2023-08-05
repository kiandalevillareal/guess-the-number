const mysteryNumber = Math.floor(Math.random() * 100) + 1;
const guessButton = document.querySelector('#guess-button');
const input = document.querySelector('#input');
const guessContainer = document.querySelector('#guess-container');

console.log(mysteryNumber);

guessButton.addEventListener('click', () =>{
    
    var guess = parseFloat(input.value);
    
    const guessedNumber = document.createElement('input');
    guessedNumber.setAttribute('readonly', 'readonly');
    guessedNumber.classList.add('guessedNumber');
    guessedNumber.type = 'number';
    guessedNumber.value = guess;

    const result = document.createElement('p');
    result.classList.add('result');

    if(mysteryNumber === guess){
        console.log('TAMA KA');
    }
        else{
            result.innerText = 'LOWER / HIGHER';
        }
    
    guessContainer.append(guessedNumber);
    guessContainer.append(result);
});


    

// console.log(mysteryNumber);

// const input1 = document.querySelector('#input1');
// const guess = input1.value;

