window.addEventListener('DOMContentLoaded', event => {

    // Activa Bootstrap scrollspy en el main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar cuando toggler es visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// Botón que da información complementaria

function mostrarInfo() {
    var btn = document.getElementById("btnInfoComplement");
    var info = document.getElementById("Infoplus");
  
    info.style.display = "block";
    btn.style.display = "none";
  }

