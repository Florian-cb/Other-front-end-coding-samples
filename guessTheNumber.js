let maximum = parseInt(prompt("Enter the maximum number:"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid maximum number:"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess:"));

let guess = 1;

while (parseInt(guess) !== targetNum) {

    if (guess == 'q') break;
    attempts++;

    if (guess > targetNum) {
        guess = prompt("Too high! Try again:");
    }
    else if (guess < targetNum) {
        guess = prompt("Too low! Try again:");
    }

}

if (guess == 'q') {
    alert("Game over. Thanks for playing!");
} else {
    alert(`Congratulations! You guessed the number ${targetNum} in ${attempts} attempts.`);
    alert(`Game over. Thanks for playing!`);
}