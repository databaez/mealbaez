document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  /* ==========================================
     1. Testimonials Slider Logic
     ========================================== */
  const testimonialsData = [
    {
      quote: "I can't thank MealBaez enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      author: "Jenifer Anderson"
    },
    {
      quote: "MealBaez has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      author: "Susan Johnson"
    },
    {
      quote: "I had struggled with my weight for years until I found MealBaez. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      author: "Emily Cole"
    },
    {
      quote: "The habit tracking and meal timing features fit seamlessly into my busy schedule. It doesn't feel like a restrictive diet at all—it's a sustainable lifestyle change.",
      author: "Michael Brown"
    },
    {
      quote: "Outstanding experience! The smart calendar reminders keep me on track throughout the workday, and the grocery discovery feature saves me so much time.",
      author: "Jessica Taylor"
    }
  ];

  let currentTestimonialIndex = 0;

  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".slider-btn[aria-label='Previous']");
  const nextBtn = document.querySelector(".slider-btn[aria-label='Next']");
  const dots = document.querySelectorAll(".dots .dot");

  function updateTestimonials(index) {
    // Show 3 cards at a time based on the current index window
    testimonialCards.forEach((card, i) => {
      const dataIndex = (index + i) % testimonialsData.length;
      const data = testimonialsData[dataIndex];
      
      card.innerHTML = `
        <div class="quote-mark">“</div>
        <p class="testimonial-text">${data.quote}</p>
        <div style="margin-top: 16px; font-weight: 700; font-size: 0.85rem; color: var(--primary-dark);">— ${data.author}</div>
      `;
    });

    // Update active dot indicator
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  if (prevBtn && nextBtn && dots.length > 0) {
    prevBtn.addEventListener("click", () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
      updateTestimonials(currentTestimonialIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
      updateTestimonials(currentTestimonialIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentTestimonialIndex = index;
        updateTestimonials(currentTestimonialIndex);
      });
    });

    // Initialize first view
    updateTestimonials(0);
  }

  /* ==========================================
     2. Pricing Toggle Logic (Monthly / Yearly)
     ========================================== */
  const btnMonthly = document.getElementById("btn-monthly");
  const btnYearly = document.getElementById("btn-yearly");
  const premiumPrice = document.getElementById("premium-price");
  const ultimatePrice = document.getElementById("ultimate-price");

  if (btnMonthly && btnYearly && premiumPrice && ultimatePrice) {
    btnMonthly.addEventListener("click", () => {
      btnMonthly.classList.add("active");
      btnYearly.classList.remove("active");
      premiumPrice.innerHTML = "$12 <span>/month</span>";
      ultimatePrice.innerHTML = "$22 <span>/month</span>";
    });

    btnYearly.addEventListener("click", () => {
      btnYearly.classList.add("active");
      btnMonthly.classList.remove("active");
      premiumPrice.innerHTML = "$6 <span>/month</span>";
      ultimatePrice.innerHTML = "$11 <span>/month</span>";
    });
  }

  /* ==========================================
     3. Scroll-to-Top Button Logic
     ========================================== */
  const goToTopBtn = document.querySelector(".got-to-top");
  if (goToTopBtn) {
    goToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ==========================================
     4. Interactive Call-to-Actions (Buttons)
     ========================================== */
  const planButtons = document.querySelectorAll(".btn-plan");
  planButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".pricing-card");
      const planName = card ? card.querySelector(".plan-name").textContent : "Selected Plan";
      alert(`Thank you for choosing the ${planName}! Redirecting to checkout...`);
    });
  });

  const contactBtns = document.querySelectorAll(".btn-contact");
  contactBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Feel free to reach out to us at hello@mealbaez.com or call +91 91813 23 2309.");
    });
  });
});
