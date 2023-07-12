// Store the questions and answers as an array of objects
const questions = [
  { question: 'Question 1', answer: 'Answer 1' },
  { question: 'Question 2', answer: 'Answer 2' },
  { question: 'Question 3', answer: 'Answer 3' },
  { question: 'Question 4', answer: 'Answer 4' },
  { question: 'Question 5', answer: 'Answer 5' }
];

// Function to handle the click event and reveal the answer
function showAnswer(element, index) {
  const answerElement = element.nextElementSibling;
  const userInput = prompt(questions[index].question);
  
  if (userInput !== null) {
    let secondsRemaining = 10;
    answerElement.textContent = questions[index].answer;
    answerElement.classList.toggle('show');
  
    const countdownInterval = setInterval(() => {
      secondsRemaining--;
      if (secondsRemaining === 0) {
        clearInterval(countdownInterval);
        answerElement.classList.remove('show');
      }
    }, 1000);
  }
}

// Attach the click event listener to each question tile
const questionTiles = document.querySelectorAll('.question');
questionTiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    const index = event.target.dataset.index;
    showAnswer(tile, index);
  });
});
