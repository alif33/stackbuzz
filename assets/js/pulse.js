document.addEventListener('DOMContentLoaded', function () {
    createPulseAnimation();
  });
  
  function createPulseAnimation() {
    const style = document.createElement('style');
    style.textContent = `
      body {
        margin: 0;
        padding: 0;
      }
  
      .section {
        position: absolute;
        background: #fff;
        overflow: hidden;
      }
  
      .bg-pulse {
        width: 100%;
        height: 100%;
      }
  
      .bg-pulse span {
        position: absolute;
        height: 30px;
        width: 30px;
        background: #2A9D8F;
      }
  
      .bg-pulse span:nth-child(3n+1) {
        background: transparent;
        border: 3px solid #2A9D8F;
      }
  
      @keyframes animate {
        0% {
          transform: scale(0) translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: scale(.5) translateY(-100px) rotate(360deg);
          opacity: 0;
        }
      }
    `;
  
    document.head.appendChild(style);
  
    const pulseContainer = document.querySelector('.bg-pulse');
  
    for (let i = 1; i <= 10; i++) {
      const span = document.createElement('span');
      span.style.position = 'absolute';
      span.style.height = '80px';
      span.style.width = '80px';
      span.style.background = '#2A9D8F';
  
      if (i % 3 === 1) {
        span.style.background = 'transparent';
        span.style.border = '5px solid #2A9D8F';
      }
  
      const animationConfig = getAnimationConfig(i);
      span.style.top = animationConfig.top;
      span.style.left = animationConfig.left;
  
      pulseContainer.appendChild(span);
  
      span.style.animation = `animate ${animationConfig.duration}s linear infinite`;
    }
  }
  
  function getAnimationConfig(index) {
    const positions = [
      { top: '20%', left: '25%', duration: 10 },
      { top: '25%', left: '50%', duration: 12 },
      { top: '10%', left: '65%', duration: 15 },
      { top: '15%', left: '70%', duration: 20 },
    ];
  
    return positions[index - 1];
  }
  