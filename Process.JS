document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  const goToTopBtn = document.querySelector('.go-to-top');
  
  if (goToTopBtn) {
    goToTopBtn.style.cursor = 'pointer';
    goToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  const processContainers = document.querySelectorAll('.process-container');
  processContainers.forEach((container, index) => {
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    container.style.transitionDelay = `${(index % 2) * 0.15}s`;
  });

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    processContainers.include = processContainers.forEach((container) => {
      const containerTop = container.getBoundingClientRect().top;

      if (containerTop < triggerBottom) {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  processContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
      container.style.transform = 'translateY(-4px)';
      container.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.05)';
    });

    container.addEventListener('mouseleave', () => {
      container.style.transform = 'translateY(0)';
      container.style.boxShadow = 'none';
    });
  });
});
