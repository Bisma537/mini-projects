let min = 1;
let max = 100;
let g = Math.floor(Math.random() * (max - min + 1)) + min;
let attempt = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${min}-${max}`);

  // user pressed Cancel
  if (guess === null) {
    window.alert("Game exited.");
    break;
  }

  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert(`Enter a number between ${min} and ${max}`);
  } else {
    attempt++;
    if (guess < g) {
      window.alert("Too low, try again");
    } else if (guess > g) {
      window.alert("Too high, try again");
    } else {
      window.alert(`Correct! You guessed it in ${attempt} attempts 🎉`);
      running = false;
    }
  }
}
