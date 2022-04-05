window.onload = function() {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');

    function show() {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }

    function close() {
        mainMenu.style.top = '-100%';
    }

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function redirect() {
        let location = window.location;
        let initial = location.pathname;
        console.log(location);
    }
    mainMenu.forEach((link) => {
        link.addEventListener('click', function(e) {
            div.style.display = "none";
            reload();
        });
    });
};