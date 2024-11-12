let timer;

function handleStartTime() {

    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    let minutes = parseInt(document.getElementById('minutesData').value, 10);
    let seconds = parseInt(document.getElementById('secondsData').value, 10);
    let hours = parseInt(document.getElementById('hoursData').value, 10);

    if (!timer) {
        timer = setInterval(() => {

            seconds++;

            if (seconds == 60) {
                minutes++;
                seconds = 0;
            }

            if (minutes == 60) {
                hours++;
                minutes = 0;
            }

            secondsSpan.textContent = `${String(seconds).padStart(2, '0')}`;
            document.getElementById('secondsData').value = seconds;
            minutesSpan.textContent = `${String(minutes).padStart(2, '0')}`;
            document.getElementById('minutesData').value = minutes;
            hoursSpan.textContent = `${String(hours).padStart(2, '0')}`;
            document.getElementById('hoursData').value = hours;

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
    document.getElementById('minutesData').value = 0;
    document.getElementById('secondsData').value = 0;
    document.getElementById('hoursData').value = 0;
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    hoursSpan.textContent = '00';
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00';

}
