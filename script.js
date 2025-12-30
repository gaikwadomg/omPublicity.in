// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinks = document.querySelector(".nav-links")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
    })
  })
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    navLinks?.classList.remove("active")
  }
})

// Smooth scroll function
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
}

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const company = document.getElementById("company").value
    const message = document.getElementById("message").value

    // Validate form
    if (!name || !email || !phone || !message) {
      alert("Please fill in all required fields")
      return
    }

    // Create mailto link
    const mailtoLink = `mailto:info@omganesh.com?subject=New Inquiry from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0ACompany: ${encodeURIComponent(company)}%0A%0AMessage:%0A${encodeURIComponent(message)}`

    // Open email client
    window.location.href = mailtoLink

    // Reset form
    contactForm.reset()
    alert("Thank you for your inquiry! Our team will contact you soon.")
  })
}

// Navbar scroll effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)"
  }

  lastScroll = currentScroll
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe service cards and portfolio items
document.querySelectorAll(".service-card, .portfolio-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "all 0.6s ease-out"
  observer.observe(el)
})
