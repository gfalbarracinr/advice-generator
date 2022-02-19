window.addEventListener('load', (event) => {
  fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    document.getElementById('title').innerText = `ADVICE #${data.slip.id}`;
    document.getElementById('advice').innerText = data.slip.advice;
  });
});