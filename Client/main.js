function pageContent() {

    console.log('the page has loaded');

    const body = document.querySelector('body');
    const logBtnContainer = document.createElement('div', {id: 'logBtnContainer'});
    const loginButton = document.createElement('button', {id: 'loginButton'});
    const logoutButton = document.createElement('button', {id: 'logoutButton'});
    const profileButton = document.createElement('button', {id: 'profileButton'});

    loginButton.innerHTML = 'Login';
    logoutButton.innerHTML = 'Logout';
    profileButton.innerHTML = 'Profile';

    body.appendChild(logBtnContainer);
    logBtnContainer.appendChild(loginButton);
    logBtnContainer.appendChild(logoutButton);
    logBtnContainer.appendChild(profileButton);

    loginButton.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/login';
    });

    logoutButton.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/logout';
    });

    profileButton.addEventListener('click', () => {
        fetch('http://localhost:8080/profile').then(res => res.json()).then(data => console.log(data));
        //window.location.href = 'http://localhost:8080/profile';
    });
};

function init() {
    pageContent();
};

window.addEventListener('load', init);