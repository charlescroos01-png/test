// loadHeader.js
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.body.insertAdjacentHTML('afterbegin', data);

    // HEADER SCROLL EFFECT
    window.addEventListener("scroll", () => {
      const header = document.getElementById("main-header");
      if(header) header.classList.toggle("glass", window.scrollY > 50);
    });
  })
  .catch(err => console.error('Failed to load header:', err));
