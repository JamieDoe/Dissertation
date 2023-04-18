// This is the main.js file for the client side of the application

// get the body element.
const body = document.querySelector('body');

function settingsPage() {
    // remove all the elements from the body, except those that are in the navbar.
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    const settingContainer = document.createElement('div');
    settingContainer.setAttribute('id', 'settingContainer');
    body.appendChild(settingContainer);

        // create the settings page.
        const settingTitle = document.createElement('h1');
        settingTitle.setAttribute('id', 'settingTitle');
        settingTitle.innerHTML = 'Settings';
        settingContainer.appendChild(settingTitle);

    // create a language select element.
    const languageSelect = document.createElement('select');
        languageSelect.setAttribute('class', 'settingSelectors');
    const languageOption1 = document.createElement('option');
    const languageOption2 = document.createElement('option');
    const languageOption3 = document.createElement('option');
    const languageOption4 = document.createElement('option');
    const languageOption5 = document.createElement('option');

    // add id's and classes to the language select element.
    languageSelect.setAttribute('id', 'languageSelect');
    languageOption1.setAttribute('class', 'languageOption');
    languageOption2.setAttribute('class', 'languageOption');
    languageOption3.setAttribute('class', 'languageOption');
    languageOption4.setAttribute('class', 'languageOption');
    languageOption5.setAttribute('class', 'languageOption');

    // append the language select element to the body.
    settingContainer.appendChild(languageSelect);
    languageSelect.appendChild(languageOption1);
    languageSelect.appendChild(languageOption2);
    languageSelect.appendChild(languageOption3);
    languageSelect.appendChild(languageOption4);
    languageSelect.appendChild(languageOption5);

    // add content to the language options.
    languageOption1.innerHTML = 'English';
    languageOption2.innerHTML = 'Spanish';
    languageOption3.innerHTML = 'French';
    languageOption4.innerHTML = 'German';
    languageOption5.innerHTML = 'Italian';

    // create a theme select element.
    const themeSelect = document.createElement('select');
    const themeOption1 = document.createElement('option');
    const themeOption2 = document.createElement('option');

    // add id's and classes to the theme select element.
    themeSelect.setAttribute('id', 'themeSelect');
        themeSelect.setAttribute('class', 'settingSelectors');
    themeOption1.setAttribute('class', 'themeOption');
    themeOption2.setAttribute('class', 'themeOption');

    // append the theme select element to the body.
    body.appendChild(themeSelect);
    settingContainer.appendChild(themeSelect);
    themeSelect.appendChild(themeOption1);
    themeSelect.appendChild(themeOption2);

    // add content to the theme options.
    themeOption1.innerHTML = 'Light';
    themeOption2.innerHTML = 'Dark';



    console.log('settings page');
    
    
    navBar();
};

// create main content, navbar ect.
function navBar() {

    // create the navbar.
    const navContainer = document.createElement('div');
    const navList = document.createElement('ul');
    const navItem1 = document.createElement('li');
    const navItem2 = document.createElement('li');
    const navItem3 = document.createElement('li');
    const navItem4 = document.createElement('li');
    const navItem5 = document.createElement('li');

    // add id's and classes to the navbar.
    navContainer.setAttribute('id', 'navContainer');
    navList.setAttribute('id', 'navList');
    navItem1.setAttribute('class', 'navItem');
    navItem2.setAttribute('class', 'navItem');
    navItem3.setAttribute('class', 'navItem');
    navItem4.setAttribute('class', 'navItem');
    navItem5.setAttribute('class', 'navItem');

    // append the navbar to the body.
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


    navItem5.addEventListener('click', () => {
        userProfile();
    });

    navItem1.addEventListener('click', () => {
        settingsPage();
    });
};

// create the main page content.
function login() {

    const profileHover = document.querySelector('.navItem:nth-child(5)');

    // create the div that will hold the buttons & create the buttons.
    const logBtnContainer = document.createElement('div');
    const loginButton = document.createElement('button');
    const logoutButton = document.createElement('button');
    
    // add id's and classes to the buttons.
    logBtnContainer.setAttribute('id', 'logBtnContainer');
    loginButton.setAttribute('class', 'logBtns');
    logoutButton.setAttribute('class', 'logBtns');

    // add content to the buttons.
    loginButton.innerHTML = 'Login';
    logoutButton.innerHTML = 'Logout';

    // append div to body, append the buttons to the div.
    logBtnContainer.appendChild(loginButton);
    logBtnContainer.appendChild(logoutButton);
    body.appendChild(logBtnContainer);

    // add event listeners to the buttons.
    loginButton.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/login';
    });

    logoutButton.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/logout';
    });

    logBtnContainer.style.display = 'none';

    profileHover.addEventListener('mouseover', () => {
        // when hovering over profile button, login and logout buttons will appear. if user is not hovering then they disappear.
        logBtnContainer.style.display = 'block';

        profileHover.addEventListener('mouseout', () => {
            logBtnContainer.style.display = 'none';
        });
    });

};

// create the profile page content.
function userProfile() {

    while (body.firstChild) {
        body.removeChild(body.firstChild);
    };

    navBar();
    
    // async function to fetch the profile data from the server.
    async function fetchProfile() {
        const response = await fetch('http://localhost:8080/profile');
        const data = await response.json();
        return data;
    };

    // create the elements for the profile page.
    const profileContainer = document.createElement('div');
    const profileName = document.createElement('p');
    const profileEmail = document.createElement('p');

    profileContainer.setAttribute('id', 'profileContainer');
    profileName.setAttribute('class', 'profileInfo');
    profileEmail.setAttribute('class', 'profileInfo');

    // append the elements to the body.
    body.appendChild(profileContainer);
    profileContainer.appendChild(profileName);
    profileContainer.appendChild(profileEmail);

    // call the fetch function to get the profile data for element content.
    fetchProfile().then(data => {
        profileName.innerHTML = `User Name: ${data.name}`;
        profileEmail.innerHTML = `Email: ${data.email}`;
    });
};

function init() {
    navBar();
    login();
};

window.addEventListener('load', init);