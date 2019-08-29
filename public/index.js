const interval = 1000;
const dispTime = () => {
    const clockHolder = document.getElementById('clock-dub');
    const date = new Date();
    const dateString = `<h1>${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}</h1>`;
    clockHolder.innerHTML = dateString;

}
dispTime();
setInterval(dispTime, interval);