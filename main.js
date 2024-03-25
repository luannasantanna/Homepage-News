const mostrarMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId);
    const nav = document.querySelector(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('ativo__menu-mobile');
            toggle.classList.toggle('ativo-menu');
        })
    }
}

mostrarMenu('.menu', '.menu-mobile');