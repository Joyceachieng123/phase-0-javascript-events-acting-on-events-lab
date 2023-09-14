function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left) || 0;
    const dodgerWidth = 40; 
    const gameFieldWidth = 400; 
  
    const newLeft = left + 1;
  
    if (newLeft + dodgerWidth <= gameFieldWidth) {
      dodger.style.left = `${newLeft}px`;
    }
  }
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }