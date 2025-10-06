// Mobile menu toggle
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.8)";
  }
});

// Contact form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Animate progress bars when visible
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressFills = entry.target.querySelectorAll(".progress-fill");
      progressFills.forEach((fill) => {
        const width = fill.style.width;
        fill.style.width = "0%";
        setTimeout(() => {
          fill.style.width = width;
        }, 100);
      });
      progressObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const skillsSection = document.getElementById("skills");
if (skillsSection) {
  progressObserver.observe(skillsSection);
}

// Enhanced Typing Effect
const roles = [
  "Backend Developer",
  "Spring Boot Expert",
  "Full Stack Engineer",
  "Java Specialist",
  "API Architect",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const deletingSpeed = 40;
const pauseTime = 2000;

function typeRole() {
  const roleElement = document.querySelector(".typing-text");
  if (!roleElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => {
      isDeleting = true;
    }, pauseTime);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(typeRole, speed);
}

// Start typing effect after page loads
window.addEventListener("load", () => {
  setTimeout(typeRole, 500);
});

// Hide scroll indicator when scrolling starts
let scrollTimeout;
const scrollIndicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {
  if (scrollIndicator && window.scrollY > 100) {
    scrollIndicator.classList.add("hidden");
  } else if (scrollIndicator && window.scrollY <= 100) {
    scrollIndicator.classList.remove("hidden");
  }
});
