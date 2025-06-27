document.addEventListener("DOMContentLoaded", function () {
  const eduSection = document.querySelector('.education-section');
  const eduBlocks = document.querySelectorAll('.edu-block');
  const eduLines = document.querySelectorAll('.edu-line');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }

  function playEducationAnimation() {
    eduBlocks.forEach(el => el.style.animation = '');
    eduLines.forEach(el => el.style.animation = '');
    // Force reflow for restart
    void eduBlocks[0].offsetWidth;
    eduBlocks.forEach((el, i) => {
      el.style.animation = `fadeInUp 1s both`;
      el.style.animationDelay = `${0.2 + i * 0.9}s`;
    });
    eduLines.forEach((el, i) => {
      el.style.animation = `growLine 0.7s forwards`;
      el.style.animationDelay = `${0.7 + i * 0.9}s`;
    });
  }

  function resetEducationAnimation() {
    eduBlocks.forEach(el => {
      el.style.animation = 'none';
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    });
    eduLines.forEach(el => {
      el.style.animation = 'none';
      el.style.opacity = 0;
      el.style.height = '0';
    });
  }

  function handleScroll() {
    if (isInViewport(eduSection)) {
      playEducationAnimation();
    } else {
      resetEducationAnimation();
    }
  }

  // Initial reset
  resetEducationAnimation();

  window.addEventListener('scroll', handleScroll, { passive: true });
});

// Skills animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll('.skill-item');
  function showSkillsOnScroll() {
    skillItems.forEach((item, idx) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        setTimeout(() => {
          item.classList.add('visible');
        }, idx * 120); // Staggered animation
      } else {
        item.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', showSkillsOnScroll, { passive: true });
  showSkillsOnScroll();
});