const refs = {
    startBtn : document.querySelector('[data-start]'),
    stopBtn : document.querySelector('[data-stop]'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)

let intervalId = null;

refs.stopBtn.setAttribute('disabled', true);


function onStartBtnClick() {
    intervalId = setInterval(
        () => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    refs.stopBtn.removeAttribute('disabled')
    refs.startBtn.setAttribute('disabled', true);
}
    
function onStopBtnClick() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled')
    refs.stopBtn.setAttribute('disabled', true);
}