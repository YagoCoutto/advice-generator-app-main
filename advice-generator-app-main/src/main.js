const advice = document.querySelector('#content');

fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        advice.innerHTML = data.slip.advice;
    });