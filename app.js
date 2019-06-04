const startButton = document.getElementById("startButton");
let userName = document.getElementById('userName');

startButton.addEventListener("click", getName());

const getName = () => {
  const name = document.getElementById('name').value;
  const nameUpperCase = name.toUpperCase();

  userName.innerHtml = nameUpperCase;
}
