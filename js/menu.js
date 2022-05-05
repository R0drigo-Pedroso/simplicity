
// Configuração do menu mobile
let botaoMenu = document.querySelector('.icone');
let menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', function(event) {
    event.preventDefault();

    menu.classList.toggle("menu-aberto");

    if (menu.classList.contains("menu-aberto")) {
        botaoMenu.innerHTML = "Fechar &times;";
    } 
    else { botaoMenu.innerHTML = "Menu &equiv;"; 
    } 
});
// Final Configuração do menu mobile