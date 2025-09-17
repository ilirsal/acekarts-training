document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ scripts.js is running ✅");

  // ================================
  // Sidebar Toggle (Mobile)
  // ================================
  const toggleBtn = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  // ================================
  // Step-by-Step Training Navigation
  // ================================
  const steps = document.querySelectorAll('.step');
  const nextBtn = document.getElementById('nextStep');
  const prevBtn = document.getElementById('prevStep');
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === steps.length - 1;

    console.log(`➡️ Showing step ${index + 1} of ${steps.length}`);
  }

  if (steps.length > 0 && nextBtn && prevBtn) {
    showStep(currentStep);

    nextBtn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  }

  // ================================
  // Module Card Navigation (Home)
  // ================================
  const moduleCards = document.querySelectorAll('.module-card[data-link]');
  moduleCards.forEach((card) => {
    const link = card.getAttribute('data-link');
    if (link) {
      card.addEventListener('click', () => {
        window.location.href = link;
      });
    }
  });

  // ================================
  // Scrollspy (Optional for homepage)
  // ================================
  const navLinks = document.querySelectorAll('.sidebar a');
  const sections = document.querySelectorAll('section[id]');

  function onScrollHighlight() {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight &&
        navLinks.length
      ) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScrollHighlight);
});
