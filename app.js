//working with page greeting
const startButton = document.getElementById("startButton");
let userName = document.getElementById('userName');

const getName = () => {
  const name = document.getElementById('name').value;
  const nameUpperCase = name.toUpperCase();
  userName.innerHTML = nameUpperCase;
  document.getElementById('greeting').classList.add('hide');
  document.getElementById('welcome-user').classList.remove('hide');
}

startButton.addEventListener("click", getName);


//working with both options
const musicButton = document.getElementById('music-trivia');
const movieButton = document.getElementById('movie-trivia');

const hideSection = (id) => {
  document.getElementById(id).classList.add('hide');
}

const showSection = (id) => {
  document.getElementById(id).classList.remove('hide');
}

const showMusicTrivia = () => {
  hideSection('welcome-user');
  showSection('trivia-music');
}

musicButton.addEventListener("click", showMusicTrivia);

const showMovieTrivia = () => {
  hideSection('welcome-user');
  showSection('trivia-movie');
}

movieButton.addEventListener("click", showMovieTrivia);

//working in result page
const resultsMusic = document.getElementById('resultMusic');
const resultsMovie = document.getElementById('resultMovie');

const showResultsMusic = () => {
  hideSection('trivia-music');
  showSection('result-page');
}

const showResultsMovie = () => {
  hideSection('trivia-movie');
  showSection('result-page');
}
resultsMusic.addEventListener("click", showResultsMusic);
resultsMovie.addEventListener("click", showResultsMovie);

const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

const returnToTriviaOptions = () => {
  hideSection('result-page');
  showSection('welcome-user');
}

const sentToThankYouPage = () => {
  hideSection('result-page');
  showSection('thank-you');
}
yesButton.addEventListener("click", returnToTriviaOptions);
noButton.addEventListener("click", sentToThankYouPage);
