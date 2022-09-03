let timerShow = document.getElementById("timer");
let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
let time = 1000
timerShow.innerHTML = "0"
ctx.translate(200, 200)
ctx.rotate(-90 * Math.PI / 180)
ctx.strokeStyle = 'white'
ctx.beginPath();
ctx.lineWidth = 5
ctx.arc(0, 0, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()
ctx.fillStyle = 'white'
ctx.fillRect(20, -3, 150, 5);
ctx.fillRect(-70, -3, 50, 5);

let str = 1
timer = setInterval(() => {
    ctx.clearRect(-70, -3, 47.5, 7)
    ctx.clearRect(22, -3, 150, 6)
    ctx.clearRect(22, -3, 150, 8)
    timerShow.innerHTML =str
    str++
    ctx.rotate(6 * Math.PI / 180)
    ctx.fillStyle = 'white'
    ctx.fillRect(20, -3, 150, 5);
    ctx.fillStyle = 'white'
    ctx.fillRect(-70, -3, 50, 5);
}, time)


let canvas2 = document.getElementById('canvas2');
ctx2 = canvas2.getContext('2d');
ctx2.translate(110, 200)
ctx2.rotate(-45 * Math.PI / 180)
ctx2.fillRect(0, 0, 140, 6);
timer = setInterval(() => {
    ctx2.clearRect(0, 0, 140, 6);
    ctx2.clearRect(0, 0, 140, 7);
    ctx2.rotate(6 * Math.PI / 180)
    ctx2.fillRect(0, 0, 140, 6);
}, time * 60)

let canvas3 = document.getElementById('canvas3');
ctx3 = canvas3.getContext('2d');
ctx3.translate(110, 200)
ctx3.rotate(-90 * Math.PI / 180)
ctx3.fillRect(0, 0, 100, 6);
timer = setInterval(() => {
    ctx3.clearRect(0, 0, 100, 6);
    ctx3.clearRect(0, 0, 100, 7);
    ctx3.rotate(25 * Math.PI / 180)
    ctx3.fillRect(0, 0, 100, 6);
}, time * 60 * 60)


