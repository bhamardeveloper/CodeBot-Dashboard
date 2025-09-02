document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const toggleBtn = document.getElementById("sidebarToggle");
  const body = document.body;
  const icon = toggleBtn.querySelector("i");

  // Set collapsed state by default on load
  if (toggleBtn && !body.classList.contains("sidebar-collapsed")) {
    body.classList.add("sidebar-collapsed");
    icon.classList.add("fa-angle-right");
    icon.classList.remove("fa-angle-left");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      body.classList.toggle("sidebar-collapsed");

      icon.classList.toggle("fa-angle-left");
      icon.classList.toggle("fa-angle-right");
    });
  }

  // Theme Toggle Script
  function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update the theme
    html.setAttribute("data-bs-theme", newTheme);

    // Update toggle button icon
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
      toggleButton.innerHTML = newTheme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    }

    // Save preference to localStorage
    localStorage.setItem("theme", newTheme);
  }

  // Load saved theme on page load
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-bs-theme", savedTheme);

  // Set initial toggle button icon
  const toggleButton = document.getElementById("theme-toggle");
  if (toggleButton) {
    toggleButton.innerHTML = savedTheme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    toggleButton.addEventListener("click", toggleTheme);
  }
});