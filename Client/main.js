// This is the main.js file for the client side of the application

// get the body element.
const body = document.querySelector('body');

// create main content, navbar ect.
function allPageContent() {

    const navContainer = document.createElement('div');
    const navList = document.createElement('ul');
    const navItem1 = document.createElement('li');
    const navItem2 = document.createElement('li');
    const navItem3 = document.createElement('li');
    const navItem4 = document.createElement('li');
    const navItem5 = document.createElement('li');

    navContainer.setAttribute('id', 'navContainer');
    navList.setAttribute('id', 'navList');
    navItem1.setAttribute('class', 'navItem');
    navItem2.setAttribute('class', 'navItem');
    navItem3.setAttribute('class', 'navItem');
    navItem4.setAttribute('class', 'navItem');
    navItem5.setAttribute('class', 'navItem');


    body.appendChild(navContainer);
    navContainer.appendChild(navList);
    navList.appendChild(navItem1);
    navList.appendChild(navItem2);
    navList.appendChild(navItem3);
    navList.appendChild(navItem4);
    navList.appendChild(navItem5);

    // add content to the nav items.
    navItem1.innerHTML = 'Settings';
    navItem2.innerHTML = 'History';
    navItem3.innerHTML = 'Home';
    navItem4.innerHTML = 'Videos';
    navItem5.innerHTML = 'Profile';

        // for each element with the class 'navItem', append to the navList.
        document.querySelectorAll('.navItem').forEach(item => {
            navList.appendChild(item);
        });

};

// create the main page content.
function login() {

    console.log('the page has loaded');

    // create the div that will hold the buttons & create the buttons.
    const logBtnContainer = document.createElement('div');
    const loginButton = document.createElement('button');
    const logoutButton = document.createElement('button');
    const profileButton = document.createElement('button');
    
    logBtnContainer.setAttribute('id', 'logBtnContainer');
    loginButton.setAttribute('class', 'logBtns');
    logoutButton.setAttribute('class', 'logBtns');
    profileButton.setAttribute('class', 'logBtns');

    // add content to the buttons.
    loginButton.innerHTML = 'Login';
    logoutButton.innerHTML = 'Logout';
    profileButton.innerHTML = 'Profile';

    // append div to body, append the buttons to the div.

    logBtnContainer.appendChild(loginButton);
    logBtnContainer.appendChild(logoutButton);
    logBtnContainer.appendChild(profileButton);

    body.appendChild(logBtnContainer);

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
    allPageContent();
    login();
};

window.addEventListener('load', init);