const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');

let showMenu =false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item=>item.classList.add('show'));

        showMenu = true;
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('close');
        menuNav.classList.remove('close');
        menuBranding.classList.remove('close');
        navItems.forEach(item=>item.classList.remove('close'));

        showMenu = false;
    }
}