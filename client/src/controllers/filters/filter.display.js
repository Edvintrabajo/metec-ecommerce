const chekMenu = () => {
    const menu = document.querySelector('#burger');
    const filters = document.querySelector('#filter-container');

    menu.addEventListener('click', () => {
        if (menu.classList.contains('closed')) {
            menu.classList.remove('closed');
            menu.classList.add('open');
            filters.style.display = 'flex';
        }else{
            menu.classList.remove('open');
            menu.classList.add('closed');
            filters.style.display = 'none';
        }
    });
}

export default chekMenu;