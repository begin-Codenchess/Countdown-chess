// content.js
function playAudio(filename) {
    const audio = new Audio(chrome.runtime.getURL(`audio/${filename}`));
    audio.play();
}

function checkClock() {
    const clockElements = document.querySelectorAll('.clock-white, .clock-black');
    clockElements.forEach(clock => {
        const timeText = clock.textContent;
        const timeParts = timeText.split(':').map(Number);
        if (timeParts.length === 2 && timeParts[0] === 0) {
            const seconds = timeParts[1];
            if (seconds >= 0 && seconds <= 10) {
                playAudio(`${seconds}_seconds.mp3`);
            }
        }
    });
}

setInterval(checkClock, 1000);  // Check the clock every second
