document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    // Toggle navigation
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active")
  
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Burger animation
      burger.classList.toggle("toggle")
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form submission
    const contactForm = document.getElementById("contact-form")
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      const formData = new FormData(contactForm)
      console.log("Form submitted with data:")
      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`)
      }
      alert("Thank you for your message! We'll get back to you soon.")
      contactForm.reset()
    })
  })
  
  