document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav .container");
  const navUl = nav.querySelector("ul");

  // Create hamburger button for mobile
  const hamburger = document.createElement("button");
  hamburger.className = "hamburger";
  hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
  hamburger.setAttribute("aria-label", "Toggle menu");

  // Insert hamburger before the ul
  nav.insertBefore(hamburger, navUl);

  // Toggle menu functionality
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
  });

  // Close menu when clicking on a link
  navUl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navUl.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target)) {
      hamburger.classList.remove("active");
      navUl.classList.remove("active");
    }
  });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Hide/show header on scroll
    if (window.scrollY > lastScrollY && window.scrollY > 200) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollY = window.scrollY;
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Return Policy Modal
function showReturnPolicy() {
  alert(
    "Return Policy:\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Returns accepted within 30 days of purchase with original receipt. Repairs come with 90-day warranty. \n\nFor full details, please visit our store or call (403) 248-2353."
  );
}

// Add loading animation to service cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe service cards and brand logos for animation
document.querySelectorAll(".service-card, .brand-logo").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Phone number click-to-call functionality
document.querySelectorAll('.contact-info').forEach(element => {
    element.addEventListener('click', function(e) {
        if (e.target.textContent.includes('(403)') || e.target.closest('div').textContent.includes('(403)')) {
            window.location.href = 'tel:4032482353';
        }
    });
});