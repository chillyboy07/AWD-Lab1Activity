const champions = ["Aatrox", "Ahri", "Garen", "Lux", "Yasuo"];
const randomChampion = champions[Math.floor(Math.random() * champions.length)]; // Random champion
                              //rndm float   //rounds down to nearest int
let guessHistory = []; //let = can be modified //stores each guess //tracks the history of guesses
const maxGuesses = 4;

function checkGuess() {
    const userGuess = document.getElementById('guess-input').value.trim();
                    //stores input value                        //remove whitespace
    const resultDiv = document.getElementById('result');
    const historyDiv = document.getElementById('guess-history');

    // check if  user has already guessed 4 times
    if (guessHistory.length >= maxGuesses) {
        resultDiv.textContent = "Sorry, you've reached the maximum number of guesses!";
        return;  // stops the function
    }

    // check if input is empty
    if (userGuess === "") {
        resultDiv.textContent = "Please enter a champion name before submitting!";
        return;
    }

    // conditional: check if the guess is correct, and display feedback
    if (userGuess.toLowerCase() === randomChampion.toLowerCase()) {
        //convert to lowercase
        resultDiv.textContent = "Congratulations! You guessed the correct champion!";
    } else {
        resultDiv.textContent = `Wrong guess! Try again. (Hint: The champion is from the list :D)`;
    }

    // stores the guess in the guessHistory array
    guessHistory.push(userGuess);

    // looping: displays all the guesses
    historyDiv.innerHTML = ""; // clear previous history
    for (let i = 0; i < guessHistory.length; i++) {
        const newP = document.createElement('p');
        newP.textContent = `Guess #${i + 1}: ${guessHistory[i]}`; // display guess with its number
        historyDiv.appendChild(newP); // add each guess to the history div
                  //to display
    }
}
