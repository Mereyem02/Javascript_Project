
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".progress-value");

let progressValue = 0;
let progressEndValue = 85;
let speed = 20;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
rgb(249, 77, 214) ${progressValue * 3.6}deg,
        #cadcff ${progressValue * 3.6}deg
    )`;
    if (progressValue >= progressEndValue) {
        clearInterval(progress);
    }
}, speed);
