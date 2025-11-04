function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}

document.addEventListener("DOMContentLoaded", () => {
  const name = "Aniekan Ekanem";
  const target = document.getElementById("typed-name");
  let index = 0;

  function type() {
    if (index < name.length) {
      target.textContent += name.charAt(index);
      index++;
      setTimeout(type, 150); // Typing speed
    }
  }

  type();

  // Project toggle functionality
  const toggleButtons = document.querySelectorAll('.project-toggle-btn');
  const roboticsProjects = document.getElementById('robotics-projects');
  const softwareProjects = document.getElementById('software-projects');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show/hide project categories
      const category = button.getAttribute('data-category');
      if (category === 'robotics') {
        roboticsProjects.style.display = 'block';
        softwareProjects.style.display = 'none';
      } else {
        roboticsProjects.style.display = 'none';
        softwareProjects.style.display = 'block';
      }
    });
  });
});