let timer;

function handleStartTime() {
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    let minutes = parseInt(document.getElementById('minutesData').value, 10);
    let seconds = parseInt(document.getElementById('secondsData').value, 10);

    if (!timer) {
        timer = setInterval(() => {
            seconds--;

            if (seconds < 0) {
                minutes--;
                seconds = 59;
            }

            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                document.getElementById('audioPlayer').play();
                document.getElementById('audioPlayer').volume = 1;
                timer = null;
            }

            minutesSpan.textContent = `${String(minutes).padStart(2, '0')}:`;
            document.getElementById('minutesData').value = minutes;
            secondsSpan.textContent = `${String(seconds).padStart(2, '0')}`;
            document.getElementById('secondsData').value = seconds;

        }, 1000);
    }
}

function handleStopTime() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function handleRestartTime() {
    document.getElementById('minutesData').value = 1;
    document.getElementById('secondsData').value = 59;
    document.getElementById('audioPlayer').pause();
    document.getElementById('audioPlayer').currentTime = 0;
    handleStartTime();
}
