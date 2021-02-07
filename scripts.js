function sidenav(state) {
    let sidenav = document.getElementById('sidenav'),
    sidemenu = document.getElementById('sidemenu');

    if(state) {
        sidenav.classList.add('show');
        sidemenu.classList.add('show');
    } else if(!state) {
        sidenav.classList.remove('show');
        sidemenu.classList.remove('show');
    }
}

window.addEventListener('load', event => {
    _events();
});

// function that inits all events
function _events() {
    document.getElementById('nav_open').addEventListener('click', event => {
        event.preventDefault();
        sidenav(true);
    });
    document.getElementById('nav_close').addEventListener('click', event => {
        event.preventDefault();
        sidenav(false);
    })
}
