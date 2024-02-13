document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const aboutUsSection = document.querySelector('.aboutUs');
  
    menuIcon.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  
    // Home Text Animation
    var homeText = document.querySelector('.homeText');
    homeText.classList.add('active');
  
    // Trigger animation for About Us section
    setTimeout(function () {
      aboutUsSection.classList.add('active');
    }, 1000); 
  });
  