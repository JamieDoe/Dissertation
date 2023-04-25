// This is the main.js file for the client side of the application

// get the body element.
const body = document.querySelector('body');

// creates body part selection page.
function homePage() {

    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    // create the main content container.
    const mainContentContainer = document.createElement('div');
    mainContentContainer.setAttribute('id', 'mainContentContainer');
    body.appendChild(mainContentContainer);

    const contentGrid = document.createElement('div');
    contentGrid.setAttribute('id', 'contentGrid');
    mainContentContainer.appendChild(contentGrid);


    // create the title.
    const homeTitle = document.createElement('h1');
    homeTitle.setAttribute('id', 'homeTitle');
    homeTitle.innerHTML = 'Select a body part';
    contentGrid.appendChild(homeTitle);

    // creates the body part selector.

    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('id', 'bodyContainer');
    contentGrid.appendChild(bodyContainer);

    const bodyPartSelector = document.createElement('img');
    bodyPartSelector.setAttribute('id', 'bodyPartSelector');
    bodyContainer.appendChild(bodyPartSelector);
    
    bodyPartSelector.src = 'assets/bodyFront.png';

    // create a button with the inner html sating Click For Back
    const backBtn = document.createElement('button');
    backBtn.setAttribute('id', 'backBtn');
    backBtn.innerHTML = 'Click For Back';
    contentGrid.appendChild(backBtn);

    const bodyButtonContainer = document.createElement('div');
    bodyButtonContainer.setAttribute('id', 'bodyButtonContainer');
    bodyContainer.appendChild(bodyButtonContainer);

    // create the front body part select buttons.

    // creates both pec buttons.
    const leftPec = document.createElement('button');
    leftPec.setAttribute('id', 'leftPecBtn');
    leftPec.setAttribute('class', 'bodyBtns');
    leftPec.innerHTML = 'Left Pec';
    bodyButtonContainer.appendChild(leftPec); 
    const rightPec = document.createElement('button');
    rightPec.setAttribute('id', 'rightPecBtn');
    rightPec.setAttribute('class', 'bodyBtns');
    rightPec.innerHTML = 'Right Pec';
    bodyButtonContainer.appendChild(rightPec); 

    // creates both bicep buttons.
    const leftBicep = document.createElement('button');
    leftBicep.setAttribute('id', 'leftBicepBtn');
    leftBicep.setAttribute('class', 'bodyBtns');
    leftBicep.innerHTML = 'Left Bicep';
    bodyButtonContainer.appendChild(leftBicep);
    const rightBicep = document.createElement('button');
    rightBicep.setAttribute('id', 'rightBicepBtn');
    rightBicep.setAttribute('class', 'bodyBtns');
    rightBicep.innerHTML = 'Right Bicep';
    bodyButtonContainer.appendChild(rightBicep);

    // creates both ab buttons.
    const upperAbs = document.createElement('button');
    upperAbs.setAttribute('id', 'upperAbsBtn');
    upperAbs.setAttribute('class', 'bodyBtns');
    upperAbs.innerHTML = 'Upper Abs';
    bodyButtonContainer.appendChild(upperAbs);
    const lowerAbs = document.createElement('button');
    lowerAbs.setAttribute('id', 'lowerAbsBtn');
    lowerAbs.setAttribute('class', 'bodyBtns');
    lowerAbs.innerHTML = 'Lower Abs';
    bodyButtonContainer.appendChild(lowerAbs);

    // creates both quad buttons.
    const leftQuad = document.createElement('button');
    leftQuad.setAttribute('id', 'leftQuadBtn');
    leftQuad.setAttribute('class', 'bodyBtns');
    leftQuad.innerHTML = 'Left Quad';
    bodyButtonContainer.appendChild(leftQuad);
    const rightQuad = document.createElement('button');
    rightQuad.setAttribute('id', 'rightQuadBtn');
    rightQuad.setAttribute('class', 'bodyBtns');
    rightQuad.innerHTML = 'Right Quad';
    bodyButtonContainer.appendChild(rightQuad);

    // creates both shin buttons.
    const leftShin = document.createElement('button');
    leftShin.setAttribute('id', 'leftShinBtn');
    leftShin.setAttribute('class', 'bodyBtns');
    leftShin.innerHTML = 'Left Shin';
    bodyButtonContainer.appendChild(leftShin);
    const rightShin = document.createElement('button');
    rightShin.setAttribute('id', 'rightShinBtn');
    rightShin.setAttribute('class', 'bodyBtns');
    rightShin.innerHTML = 'Right Shin';
    bodyButtonContainer.appendChild(rightShin);

    // creates back body part select buttons.

    // creates both trap buttons.
    const leftTrap = document.createElement('button');
    leftTrap.setAttribute('id', 'leftTrapBtn');
    leftTrap.setAttribute('class', 'backBtns');
    leftTrap.innerHTML = 'Left Trap';
    bodyButtonContainer.appendChild(leftTrap);
    const rightTrap = document.createElement('button');
    rightTrap.setAttribute('id', 'rightTrapBtn');
    rightTrap.setAttribute('class', 'backBtns');
    rightTrap.innerHTML = 'Right Trap';
    bodyButtonContainer.appendChild(rightTrap);

    // creates both shoulder buttons.
    const leftShoulder = document.createElement('button');
    leftShoulder.setAttribute('id', 'leftShoulderBtn');
    leftShoulder.setAttribute('class', 'backBtns');
    leftShoulder.innerHTML = 'Left Delts';
    bodyButtonContainer.appendChild(leftShoulder);
    const rightShoulder = document.createElement('button');
    rightShoulder.setAttribute('id', 'rightShoulderBtn');
    rightShoulder.setAttribute('class', 'backBtns');
    rightShoulder.innerHTML = 'Right Delts';
    bodyButtonContainer.appendChild(rightShoulder);

    // creates both lat buttons.
    const leftLat = document.createElement('button');
    leftLat.setAttribute('id', 'leftLatBtn');
    leftLat.setAttribute('class', 'backBtns');
    leftLat.innerHTML = 'Left Lat';
    bodyButtonContainer.appendChild(leftLat);
    const rightLat = document.createElement('button');
    rightLat.setAttribute('id', 'rightLatBtn');
    rightLat.setAttribute('class', 'backBtns');
    rightLat.innerHTML = 'Right Lat';
    bodyButtonContainer.appendChild(rightLat);

    // creates both tricep buttons.
    const leftTricep = document.createElement('button');
    leftTricep.setAttribute('id', 'leftTricepBtn');
    leftTricep.setAttribute('class', 'backBtns');
    leftTricep.innerHTML = 'Left Tricep';
    bodyButtonContainer.appendChild(leftTricep);
    const rightTricep = document.createElement('button');
    rightTricep.setAttribute('id', 'rightTricepBtn');
    rightTricep.setAttribute('class', 'backBtns');
    rightTricep.innerHTML = 'Right Tricep';
    bodyButtonContainer.appendChild(rightTricep);

    // creates both lower back button.

    const lowerBack = document.createElement('button');
    lowerBack.setAttribute('id', 'lowerBackBtn');
    lowerBack.setAttribute('class', 'backBtns');
    lowerBack.innerHTML = 'Lower Back';
    bodyButtonContainer.appendChild(lowerBack);

    // creates both glute buttons.
    const leftGlute = document.createElement('button');
    leftGlute.setAttribute('id', 'leftGluteBtn');
    leftGlute.setAttribute('class', 'backBtns');
    leftGlute.innerHTML = 'Left Glute';
    bodyButtonContainer.appendChild(leftGlute);
    const rightGlute = document.createElement('button');
    rightGlute.setAttribute('id', 'rightGluteBtn');
    rightGlute.setAttribute('class', 'backBtns');
    rightGlute.innerHTML = 'Right Glute';
    bodyButtonContainer.appendChild(rightGlute);

    // creates both hamstring buttons.
    const leftHamstring = document.createElement('button');
    leftHamstring.setAttribute('id', 'leftHamstringBtn');
    leftHamstring.setAttribute('class', 'backBtns');
    leftHamstring.innerHTML = 'Left Hamstring';
    bodyButtonContainer.appendChild(leftHamstring);
    const rightHamstring = document.createElement('button');
    rightHamstring.setAttribute('id', 'rightHamstringBtn');
    rightHamstring.setAttribute('class', 'backBtns');
    rightHamstring.innerHTML = 'Right Hamstring';
    bodyButtonContainer.appendChild(rightHamstring);

    // creates both calf buttons.
    const leftCalf = document.createElement('button');
    leftCalf.setAttribute('id', 'leftCalfBtn');
    leftCalf.setAttribute('class', 'backBtns');
    leftCalf.innerHTML = 'Left Calf';
    bodyButtonContainer.appendChild(leftCalf);
    const rightCalf = document.createElement('button');
    rightCalf.setAttribute('id', 'rightCalfBtn');
    rightCalf.setAttribute('class', 'backBtns');
    rightCalf.innerHTML = 'Right Calf';
    bodyButtonContainer.appendChild(rightCalf);

    // create test button.
    const testBtn = document.createElement('button');
    testBtn.setAttribute('id', 'testBtn');
    testBtn.setAttribute('class', 'backBtns');
    testBtn.innerHTML = 'Test';
    bodyButtonContainer.appendChild(testBtn);

    


    const frontButtonNumber = document.querySelectorAll('.bodyBtns');
    const backButtonNumber = document.querySelectorAll('.backBtns');

    let isImg = true;

    backBtn.addEventListener('click', () => {
        if(isImg) {
            bodyPartSelector.src = 'assets/bodyBack.png';
            for (let i = 0; i < frontButtonNumber.length; i++) {
                frontButtonNumber[i].style.display = 'none';
            }
            for (let i = 0; i < backButtonNumber.length; i++) {
                backButtonNumber[i].style.display = 'block';
            }
        } else {
            bodyPartSelector.src = 'assets/bodyFront.png';
            for (let i = 0; i < frontButtonNumber.length; i++) {
                frontButtonNumber[i].style.display = 'block';
            }
            for (let i = 0; i < backButtonNumber.length; i++) {
                backButtonNumber[i].style.display = 'none';
            }
        }
        isImg = !isImg;
    });
    

    for (let i = 0; i < frontButtonNumber.length; i++) {
        frontButtonNumber[i].addEventListener('click', () => {
            videoReturn(frontButtonNumber[i].innerHTML);
        });
    };

    for(let i = 0; i < backButtonNumber.length; i++) {
        backButtonNumber[i].addEventListener('click', () => {
            videoReturn(backButtonNumber[i].innerHTML);
        });
    };

    navBar();
};

function videoReturn(part) {

    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    navBar();

    const videoContainer = document.createElement('div');
    videoContainer.setAttribute('id', 'videoContainer');
    body.appendChild(videoContainer);

    const pageGrid = document.createElement('div');
    pageGrid.setAttribute('id', 'pageGrid');
    videoContainer.appendChild(pageGrid);

    const videoTitle = document.createElement('h1');
    videoTitle.setAttribute('id', 'videoTitle');
    videoTitle.innerHTML = 'Stretch Videos for ' + part;
    pageGrid.appendChild(videoTitle);

    let video;

    $(document).ready(function() {
        
        const API_KEY = "AIzaSyAQUFhtDhitr7_P1RDql8F5g3zVnh3sIBs";
        const input = "Stretch videos for " + part;

        videoSearch(API_KEY, input, 5);
        
    });

    function videoSearch(key, query, maxResults) {

        $.get("https:/www.googleapis.com/youtube/v3/search?key=" + key 
            + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + query, 
                function(data) {
                    console.log(data);

                    data.items.forEach(item => {
                        video = item.id.videoId;
                        const videoFrame = document.createElement('iframe');
                        videoFrame.setAttribute('id', 'videoFrame');
                        videoFrame.setAttribute('src', 'https://www.youtube.com/embed/' + video);
                        videoFrame.setAttribute('frameborder', '0');
                        videoFrame.setAttribute('allow', 'fullscreen');
                        pageGrid.appendChild(videoFrame);
                    })
                }); 

    };

};

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
        settingTitle.innerHTML = 'Preferences';
        settingContainer.appendChild(settingTitle);

    // create a language select element.
    const languageSelect = document.createElement('select');
    languageSelect.setAttribute('id', 'languageSelect');
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

    // create a support & feedback button.
    const supportFeedback = document.createElement('div');
    supportFeedback.setAttribute('id', 'supportFeedback');
        supportFeedback.setAttribute('class', 'settingSelectors');
    supportFeedback.innerHTML = 'Support & Feedback';
    settingContainer.appendChild(supportFeedback);


    console.log('settings page');


    const settingsLogContainer = document.createElement('div');
    settingsLogContainer.setAttribute('id', 'settingsLogContainer');
    settingContainer.appendChild(settingsLogContainer);

    // create a login button.
    const loginBtn = document.createElement('button');
    loginBtn.setAttribute('class', 'setLogBtns');
    loginBtn.innerHTML = 'Login';

    // create a logout button.
    const logoutBtn = document.createElement('button');
    logoutBtn.setAttribute('class', 'setLogBtns');
    logoutBtn.innerHTML = 'Logout';


    settingsLogContainer.appendChild(loginBtn);
    settingsLogContainer.appendChild(logoutBtn);

    loginBtn.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/login';
    });

    logoutBtn.addEventListener('click', () => {
        window.location.href = 'http://localhost:8080/logout';
    });

    
    
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

    navItem3.addEventListener('click', () => {
        homePage();
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
        profileName.innerHTML = `Username: ${data.name}`;
        profileEmail.innerHTML = `Email: ${data.email}`;
    });
};

function init() {
    homePage()
    login();
};

window.addEventListener('load', init);