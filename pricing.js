// Pricing page: billing toggle and buttons.
document.addEventListener('DOMContentLoaded', () => {
  const monthlyButton = document.getElementById('btn-monthly');
  const yearlyButton = document.getElementById('btn-yearly');
  const plusPrice = document.querySelector('#premium-price .price');
  const premiumPrice = document.querySelector('#ultimate-price .price');

  function updateBilling(yearly) {
    if (!monthlyButton || !yearlyButton || !plusPrice || !premiumPrice) return;
    monthlyButton.classList.toggle('active', !yearly);
    yearlyButton.classList.toggle('active', yearly);
    monthlyButton.setAttribute('aria-pressed', String(!yearly));
    yearlyButton.setAttribute('aria-pressed', String(yearly));
    plusPrice.textContent = yearly ? '$6' : '$12';
    premiumPrice.textContent = yearly ? '$11' : '$22';
    // Both prices are shown as the monthly equivalent, including on yearly billing.
  }

  monthlyButton?.addEventListener('click', () => updateBilling(false));
  yearlyButton?.addEventListener('click', () => updateBilling(true));
  updateBilling(false);

  document.querySelectorAll('.btn-plan').forEach((button) => {
    button.addEventListener('click', () => {
      const plan = button.closest('.pricing-card')?.querySelector('.plan-name')?.textContent.trim() || 'a plan';
      alert(`You selected ${plan}. Sign-up is not available yet.`);
    });
  });

  document.querySelector('.cta-btn')?.addEventListener('click', () => {
    document.querySelector('.pricing')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Supports the FAQ accordion when its markup is added from the mockup.
  document.querySelectorAll('.faq-question').forEach((question) => {
    const answer = question.nextElementSibling;
    if (!answer) return;
    question.setAttribute('aria-expanded', String(!answer.hidden));
    question.addEventListener('click', () => {
      answer.hidden = !answer.hidden;
      question.setAttribute('aria-expanded', String(!answer.hidden));
    });
  });

  document.querySelector('.nav-btn')?.addEventListener('click', () => {
    window.location.href = 'mailto:hello@mealbaez.com?subject=Mealbaez%20Question';
  });
  document.querySelector('.cta-section a[href="#"]')?.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'mailto:hello@mealbaez.com?subject=Mealbaez%20Question';
  });

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
