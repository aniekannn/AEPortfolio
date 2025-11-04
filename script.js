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

  function switchToCategory(category) {
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    
    if (category === 'robotics') {
      roboticsProjects.style.display = 'block';
      softwareProjects.style.display = 'none';
      document.querySelector('[data-category="robotics"]').classList.add('active');
    } else {
      roboticsProjects.style.display = 'none';
      softwareProjects.style.display = 'block';
      document.querySelector('[data-category="software"]').classList.add('active');
    }
  }

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      switchToCategory(category);
    });
  });

  // Handle links to specific projects
  document.querySelectorAll('a[href="#sqooasha-project"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchToCategory('software');
      setTimeout(() => {
        document.getElementById('sqooasha-project').scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  });

  document.querySelectorAll('a[href="#frc-robotics-project"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchToCategory('robotics');
      setTimeout(() => {
        document.getElementById('frc-robotics-project').scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  });
});