document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const circleContainer = document.getElementById('circle-container');
    const scoreDisplay = document.getElementById('score');

    let score = 0;
    let circleCount = 0;
    const totalCircles = 100;

    function fadeOutMessage() {
        message.style.opacity = '0';
    }

    function createCircle() {
        if (circleCount >= totalCircles) {
            document.body.style.transition = 'opacity 2s';
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.innerHTML = `<div id="final-score">Final Score: ${score}</div>`;
                document.getElementById('final-score').style.textAlign = 'center';
                document.getElementById('final-score').style.fontSize = '36px';
                document.getElementById('final-score').style.marginTop = '20%';
                document.getElementById('final-score').style.color = '#333';
            }, 2000);
            return;
        }

        const circle = document.createElement('div');
        circle.classList.add('circle');
        const size = Math.random() * 50 + 20;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${Math.random() * (window.innerWidth - size)}px`;
        circle.style.top = `${Math.random() * (window.innerHeight - size)}px`;

        let isHovered = false;

        circle.addEventListener('mouseover', () => {
            if (!isHovered) {
                isHovered = true;
                score++;
                scoreDisplay.textContent = `Score: ${score}`;
            }
        });

        circle.addEventListener('transitionend', () => {
            circle.remove();
        });

        circleContainer.appendChild(circle);

        setTimeout(() => {
            if (!isHovered) {
                circle.style.opacity = '0';
            }
        }, 5000);

        circle.style.transition = 'opacity 1s';
        circle.style.opacity = '1';

        circleCount++;
    }

    setTimeout(fadeOutMessage, 3000);
    setInterval(createCircle, 50);  // Increased frequency of circle creation
});
