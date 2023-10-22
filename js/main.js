// Navigation Scroll Styles
let logo = document.querySelector('#logo img');
let navbar = document.getElementById('navbar');
let navigation = document.getElementById('navigation');

window.onscroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        logo.src = "../images/logo-black.png";
        navbar.classList.add('bg-white' , 'shadow-sm');
    } else if(document.body.scrollTop < 10 || document.documentElement.scrollTop < 10) {
        logo.src = "../images/logo.png";
        navbar.classList.remove('bg-white' , 'shadow-sm');
    }
}
// Navigation Scroll Styles