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
const artButton = document.getElementById('arts-trivia');

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

const showArtTrivia = () => {
  hideSection('welcome-user');
  showSection('trivia-art');
}

artButton.addEventListener("click", showArtTrivia);

//working in result page
const resultsMusic = document.getElementById('resultMusic');
const resultsMovie = document.getElementById('resultMovie');
const resultsArts = document.getElementById('resultArt');

let userResult = document.getElementById('user-results');

const correctAnswersMusic = () => {
  let q1, q2, q3;
//First question
  if (document.getElementById('qm1').checked==true) {
    q1 = 1 }
  else {
    q1 = 0 }
//Second question
  if (document.getElementById('qm2').checked==true) {
  q2 = 1 }
  else {
    q2 = 0 }
//Third question
  if (document.getElementById('qm3').checked==true) {
    q3 = 1 }
  else {
    q3 = 0 }

  let total = q1+q2+q3;
  userResult.innerHTML = total;
  }

  const correctAnswersArt = () => {
    let q1, q2, q3;
  //First question
    if (document.getElementById('qa1').checked==true) {
      q1 = 1 }
    else {
      q1 = 0 }
  //Second question
    if (document.getElementById('qa2').checked==true) {
    q2 = 1 }
    else {
      q2 = 0 }
  //Third question
    if (document.getElementById('qa3').checked==true) {
      q3 = 1 }
    else {
      q3 = 0 }

    let total = q1+q2+q3;
    userResult.innerHTML = total;
    }

    const correctAnswersMovie = () => {
      let q1, q2, q3;
    //First question
      if (document.getElementById('qf1').checked==true) {
        q1 = 1 }
      else {
        q1 = 0 }
    //Second question
      if (document.getElementById('qf2').checked==true) {
      q2 = 1 }
      else {
        q2 = 0 }
    //Third question
      if (document.getElementById('qf3').checked==true) {
        q3 = 1 }
      else {
        q3 = 0 }

      let total = q1+q2+q3;
      userResult.innerHTML = total;
      }

const showResultsMusic = () => {
  hideSection('trivia-music');
  showSection('result-page');
  correctAnswersMusic();
}

const showResultsMovie = () => {
  hideSection('trivia-movie');
  showSection('result-page');
  correctAnswersMovie();
}

const showResultsArt = () => {
  hideSection('trivia-art');
  showSection('result-page');
  correctAnswersArt();
}
resultsMusic.addEventListener("click", showResultsMusic);
resultsMovie.addEventListener("click", showResultsMovie);
resultsArts.addEventListener("click", showResultsArt);

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
