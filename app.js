app = {
    init: () => {
        app.darkmodeDisplay();
    },

    darkmodeDisplay: () => {
        const switchModeButton = document.getElementById('mode-button');
        switchModeButton.addEventListener('click', () => {
            const elements = document.querySelectorAll('.body, .header, .education-section, .skill-section, .header__profile-img, .header__mode-button, .skill-article__item-icon');
            elements.forEach(element => element.classList.toggle('dark'));

            switchModeButton.classList.toggle('bi-sun');
            switchModeButton.classList.toggle('bi-moon-fill');
        });
    }
};

document.addEventListener('DOMContentLoaded', app.init());