const OnKeyEscHide = (id) => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideFilters(id);
        }
    });
}

export const showFilters = (id) => {
    const filters = document.getElementById(id);
    let timer = 0;

    // Show filters on key esc
    OnKeyEscHide(id);

    filters.style.display = 'block';

    const interval = setInterval(() => {
        timer += 0.1;
        filters.style.opacity = timer;

        if (timer >= 1) {
            filters.style.opacity = '1';
            clearInterval(interval);
        }
    }, 10);
}

export const hideFilters = (id) => {
    const filters = document.getElementById(id);
    let timer = 1;

    const interval = setInterval(() => {
        timer -= 0.1;
        filters.style.opacity = timer;
        
        if (timer <= 0) {
            filters.style.opacity = '0';
            filters.style.display = 'none';
            clearInterval(interval);
        }
    }, 10);
}