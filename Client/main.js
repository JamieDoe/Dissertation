// This is the main.js file for the client side of the application

const fetch = require('node-fetch');


// get the body element.
const body = document.querySelector('body');

// create the main page content.
function pageContent() {

    console.log('the page has loaded');

    // create the div that will hold the buttons & create the buttons.
    const logBtnContainer = document.createElement('div', {id: 'logBtnContainer'});
    const loginButton = document.createElement('button', {id: 'loginButton'});
    const logoutButton = document.createElement('button', {id: 'logoutButton'});
    const profileButton = document.createElement('button', {id: 'profileButton'});
    
    loginButton.innerHTML = 'Login';
    logoutButton.innerHTML = 'Logout';
    profileButton.innerHTML = 'Profile';

    // append div to body, append the buttons to the div.
    body.appendChild(logBtnContainer);
    logBtnContainer.appendChild(loginButton);
    logBtnContainer.appendChild(logoutButton);
    logBtnContainer.appendChild(profileButton);

    // add event listeners to the buttons.
    loginButton.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/login';
    });
    logoutButton.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/logout';
    });
    profileButton.addEventListener('click', () => {
        userProfile();
    });
};

// create the profile page content.
function userProfile() {
    
    // async function to fetch the profile data from the server.
    async function fetchProfile() {
        const response = await fetch('http://localhost:8080/profile');
        const data = await response.json();
        return data;
    };

    fetchProfile().then(data => {
        console.log(data);
    });

    // create the elements for the profile page.
    const profileContainer = document.createElement('div', {id: 'profileContainer'});
    const profileName = document.createElement('p', {id: 'profileName'});
    const profileEmail = document.createElement('p', {id: 'profileEmail'});

    // append the elements to the body.
    body.appendChild(profileContainer);
    profileContainer.appendChild(profileName);
    profileContainer.appendChild(profileEmail);

    // call the fetch function to get the profile data for element content.
    fetchProfile().then(data => {
        profileName.innerHTML = `Name: ${data.name}`;
        profileEmail.innerHTML = `Email: ${data.email}`;
    });

};

function init() {
    pageContent();
};

window.addEventListener('load', init);