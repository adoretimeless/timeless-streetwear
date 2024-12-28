// Toggle between light and dark mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});

// Handle form submission for contact us
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission behavior

  // Retrieve form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert("Thank you for reaching out! We'll get back to you shortly.");
    
    // Clear the form after submission
    contactForm.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

// Handle product search functionality
const searchButton = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');

searchButton.addEventListener('click', () => {
  const searchQuery = searchBar.value.trim().toLowerCase();

  if (searchQuery) {
    // Implement your search logic here
    alert("Searching for: " + searchQuery);

    // Reset search bar
    searchBar.value = '';
  } else {
    alert("Please enter a search term.");
  }
});

// Form submission handling for newsletter subscription
const subscribeButton = document.getElementById('subscribe-btn');
const newsletterEmail = document.getElementById('newsletter-email');

subscribeButton.addEventListener('click', () => {
  const emailValue = newsletterEmail.value.trim();

  if (emailValue) {
    alert("Thank you for subscribing to our newsletter!");
    newsletterEmail.value = '';  // Clear the input field
  } else {
    alert("Please enter a valid email address.");
  }
});
