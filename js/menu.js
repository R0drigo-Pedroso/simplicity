let botaoMenu = document.querySelector('.icone');
let menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', function(event) {
    preventDefault();

    menu.classList.toggle("menu-aberto");
});