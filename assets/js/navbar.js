document.addEventListener("DOMContentLoaded", function () {
    const menus = document.querySelectorAll(".hextra-navbar-collapsible-button");
    menus.forEach(function (menu) {
      menu.addEventListener("mouseenter", function (e) {
        e.preventDefault();
        menu.querySelector('.menu-icon').textContent = '↑';
        const submenu = menu.querySelector('.hextra-navbar-submenu');
        submenu.classList.remove('hidden');
      });
      menu.addEventListener("mouseleave", function (e) {
        e.preventDefault();    
        menu.querySelector('.menu-icon').textContent = '↓';  
        const submenu = menu.querySelector('.hextra-navbar-submenu');
        submenu.classList.add('hidden');
      });
    });
  });
