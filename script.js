const mysteryNumber = Math.floor(Math.random() * 100) + 1;
const guessButton = document.querySelector('#guess-button');
const input = document.querySelector('#input');
const guessItem = document.querySelector('#guess-item');
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

    if(guess === mysteryNumber){
        result.innerText = 'YOU GUESSED IT!';
        guessedNumber.style.backgroundColor = 'green';
        guessedNumber.style.color = 'white';
        result.style.color = 'green';
        result.style.fontSize = '1.5rem';
        result.style.fontWeight = '600';
    }
        else if(guess < mysteryNumber){
            result.innerText = 'HIGHER';
        }
        else{
            result.innerText = 'LOWER';
        }
    
    result.append(guessedNumber);
    guessItem.append(result);
    guessContainer.append(guessItem);

    input.value = '';
});
