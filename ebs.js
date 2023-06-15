setTimeout(() => {
    const wordAnimations = document.querySelectorAll('.word-animation');
    wordAnimations.forEach((element, index) => {
      element.style.animationDelay = `${index * 2}s`;
    });
  }, 20);