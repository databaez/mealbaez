// Team page: contact, application, categories, and back-to-top.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.nav-btn')?.addEventListener('click', () => {
    window.location.href = 'mailto:hello@mealbaez.com?subject=Mealbaez%20Question';
  });

  document.querySelector('.cta-btn')?.addEventListener('click', () => {
    window.location.href = 'mailto:hello@mealbaez.com?subject=Join%20the%20Mealbaez%20Team';
  });

  // Category filtering works when the mockup's category buttons and
  // data-category attributes are added to the HTML.
  const tabs = document.querySelectorAll('[data-team-filter]');
  const members = document.querySelectorAll('.member-card[data-category]');
  if (tabs.length && members.length) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const selected = tab.dataset.teamFilter;
        tabs.forEach((item) => {
          const active = item === tab;
          item.classList.toggle('active', active);
          item.setAttribute('aria-pressed', String(active));
        });
        members.forEach((member) => {
          member.hidden = selected !== 'all' && member.dataset.category !== selected;
        });
      });
    });
  }

  const toTop = document.querySelector('.go-to-top');
  if (toTop) {
    toTop.setAttribute('role', 'button');
    toTop.setAttribute('tabindex', '0');
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    toTop.addEventListener('click', scrollTop);
    toTop.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        scrollTop();
      }
    });
  }
});
