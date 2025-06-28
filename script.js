    const shopButton = document.querySelector('.shop-button');
    
    shopButton.addEventListener('click', () => {
        alert('Welcome to the shop!');
    });
let canvas = document.getElementById('pinballCanvas');
let ctx = canvas.getContext('2d');
let ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let isGameActive = false;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffcc00';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    if (!isGameActive) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    // Ball movement
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

document.getElementById('startGame').addEventListener('click', () => {
    isGameActive = true;
    draw();
});