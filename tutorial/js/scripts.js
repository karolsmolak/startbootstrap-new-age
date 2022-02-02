/*!
* Start Bootstrap - Simple Sidebar v6.0.3 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
        $("#sidebar-wrapper-content").click( (e) => {
            if ($(window).width() < 768) {
                document.body.classList.toggle('sb-sidenav-toggled');
            }
            $(".active-link").removeClass("active-link");
            $(e.target).addClass("active-link");
        });
        let hash = window.location.hash;
        if (hash){
            let menuId = hash + "-menu";
            $(".active-link").removeClass("active-link");
            $(menuId).addClass("active-link");
        }
    }

});

