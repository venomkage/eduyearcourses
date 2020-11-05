let advice = document.getElementById("advice");

fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => (advice.innerText = data.slip.advice));

const refresh = () => {
  window.location.reload();
};
