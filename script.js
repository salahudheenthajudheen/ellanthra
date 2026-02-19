/* ============================
   LEGO COMING SOON — SCRIPTS
   ============================ */

// ========== Email Notify Form ==========
const form = document.getElementById('notifyForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    if (email) {
        successMsg.classList.add('show');
        form.reset();
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 4000);
    }
});

// ========== Floating LEGO Bricks Background ==========
const BRICK_COLORS = ['#E3000B', '#006CB7', '#FFD500', '#00852B', '#FF6F00', '#9C27B0'];
const brickBg = document.getElementById('brickBg');

function createFloatingBrick() {
    const brick = document.createElement('div');
    brick.classList.add('floating-brick');

    const color = BRICK_COLORS[Math.floor(Math.random() * BRICK_COLORS.length)];
    const size = 20 + Math.random() * 40;
    const left = Math.random() * 100;
    const duration = 15 + Math.random() * 25;
    const delay = Math.random() * 20;

    brick.style.width = `${size}px`;
    brick.style.height = `${size * 0.5}px`;
    brick.style.backgroundColor = color;
    brick.style.left = `${left}%`;
    brick.style.animationDuration = `${duration}s`;
    brick.style.animationDelay = `${delay}s`;

    // Add a mini stud on top
    const stud = document.createElement('div');
    stud.style.cssText = `
    position: absolute;
    top: -${size * 0.15}px;
    left: 50%;
    transform: translateX(-50%);
    width: ${size * 0.35}px;
    height: ${size * 0.35}px;
    border-radius: 50%;
    background: inherit;
    filter: brightness(1.2);
    opacity: 0.7;
  `;
    brick.appendChild(stud);

    brickBg.appendChild(brick);
}

// Create floating bricks
for (let i = 0; i < 25; i++) {
    createFloatingBrick();
}
