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

function onStartBtnClick() {
    intervalId = setInterval(
        () => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    refs.startBtn.setAttribute('disabled', true);
}
    
function onStopBtnClick() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled')
    
}