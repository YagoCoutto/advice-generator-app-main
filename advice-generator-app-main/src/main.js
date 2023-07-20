const advice = document.querySelector('#cite');
const strong = document.querySelector('strong');
const btt = document.querySelector('button');

function updateApi() {

    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            advice.innerHTML = `&#8220;${data.slip.advice}&#8221;`;
            strong.innerHTML = ` #${data.slip.id}`
        });
}
updateApi()

btt.addEventListener('click', updateApi)