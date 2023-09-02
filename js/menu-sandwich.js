const menu_btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
menu_btn.addEventListener('click', function(){
    menu.classList.toggle('menu_show');
})