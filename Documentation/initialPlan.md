# Initial Plan

## CW1.2 Problem description

### What is the problem that we want to solve?

* Reducing food wastage by utilising as many ingredients as possible.
* Addressing the issue of having ingredients kitchen/fridge but still having no idea what to cook.
* Proposal to build an application that would suggest a variety of possible meal recipes the user can prepare using the ingredients currently in the kitchen.
* The user enters the ingredients they want to use, and meal options will be returned.
  * meal options are classified based on difficulty of preparation.
* Database will be used to record the meals that the user has selected to prepare before.
  * User to add any allergies to filter searches when choosing recipes.

### A list of related works/projects/solutions

* Platter Food Recipes is an app on the Apple app store
  * Overall app is very similar, however it only returns recipes unlike our proposal
  * it has just 15 ratings at an average of 4.5 stars
  * Last review was 2 years ago
  * last update was 8 months ago
* Fridgely is an app on the Apple app store
  * This app doesn't return recipes, it notifies you when an ingredient in your fridge is going to expire.
  * It has 18 reviews at an average of 3.6 starts
  * Last review was 21/12/2020
  * last update was 7 months ago
* My Fridge: food recipes is an app on the Apple app store
  * Overall app is similar, however it will only return the recipes (no extra function)
  * It was 19 reviews at an average of just 1.2 stars
  * last review was 02/01/2021
  * last update was one month ago

## CW1.3 Project application domain

### Who is our target audience and why?

* The target audience are 16 year old users and older because:
  * This is because from the age of 16, the user would be able to operate a stove unsupervised, and also follow the selected recipes closely to prepare the chosen meals.
  * The target audience is anyone above 16 years of age because cooking is something a vast majority of people already do and it is also something a user within the specified age range
  can learn how to do through use of the application.

### Demonstration that project has medium complexity with 3 distinct components <!-- E.g. GUI + Logic + Storage -->

Our three layers/components:

### GUI

* Use of HTML5 for our Graphic User Interface design; allowing users to interact through electronic devices via visual indicator representations.
   1. Showing an empty ingredients pane (initially before the user selects anything) and displaying the option to search up and add ingredients.
   2. From the ingredients selected, HTML5 & JavaScript will be used to display all the recipe options.
   3. Navigation through different web pages of the app will be possible (e.g account details/login page).

### Logic

* The Logic component of the application will be coded in Javascript, covering the functionality of the app with the use of libraries such as JQuery, Express, AJAX etc.
   1. Compiling the selected recipes into a possible meal (web scraper).
   2. Using it to pull recipes from the web in real time.
   3. Filtering the recipes that match the information that the user has entered.

### Storage

* Use of a Database for the Storage component of our project. It will be an SQL database that is available on our university virtual machines.
   1. Maintain a database of recipes that the user has chosen in the past.
   2. Storing any allergies that the user may have.
   3. Storing log in information of the user.
   4. We will also use local storage using JavaScript to store the ingridients the user has in their fridge.
* What constitutes the storage layer?
PostgreSQL and Local Storage.
* What are the main services provided by the system?
Providing an insight on what you can cook using the ingredients in your fridge and will update you when your ingredients will expire.
* How will the target audience interact with the system?
A website.

## CW1.4 The team

### Team expertise

### Team strengths

* Hard working team
* Strong interpersonal and communication skills
* All familiar with Javascript
* All familiar with HTML & CSS
* Each member is competent in the required languages, yet they all have their own strengths

### Team weaknesses

* Minimal past experience in application development and maintenance
* Availability

### Experience with software developement

* UP2028963 - very little past experience
* UP2016988 - very little experience.
* UP953068 - Very little experience - coded multiple websites.
* UP960777 - no experience
* UP2020033 - Very little experience with development, 4 years experience as a test analyst working with developers.
* UP969376 - little past experience.

### What are the languages/technologies each team member is familiar with?

* UP2028963 - familiarity with Javascript, NodeJS, HTML and CSS, SQL.
* UP2016988 - familiarity with JavaScript, NodeJS, ExpressJS, AJAX and git. Knowledge in databases such as MongoDB and PSQL. Knowledge on web development using HTML and CSS.
* UP953068 - Familiar with JavaScript, NodeJS and ExpressJS, also has a good understanding of PSQL. Very familiar with HTML and CSS.
* UP2020033 - Familiar with Javascript, NodeJS, HTML, CSS and SQL.
* UP960777 - Javascript,HTML & CSS, SQL , C#
* UP969376 - familiar with CSS, HTML, SQL, Javascript and NodeJS

### What languages/tools/technologies will you be using?

### We will be using the following programming languages/tools/technologies:

* Javascript/NodeJS
* PSQL
* HTML
* CSS
* VScode
* GitHub
* Git
* ExpressJS
* FetchAPI
* Virtual Machine (VM)

### Who will act as a leader (this can rotate)?

* UP2028963

## CW1.5 Planning

### Identifying tasks and responsibilities

### How the workload is being split

* Everyone is going to work on every part of the project for a wholistic understanding, easier maintenance, developement and testing.
* Group is being split into pairs (pairing changing every month), that will build upon the work of all other pairs and work collaboratively.
  * 3 people writing the code and 3 people supervising the suitability of the code at any given time.

### Project Milestones

* Set fundamental requirements and the appropriate technologies for the software.
* Agree and create a model design of the system.
* Prototype the design of the system. <!-- skeleton sample -->
* Logic-component functionality
* Storage-component functionality
* Complete final tests and fix any defects(repeat until no bugs found).
* Beta testing
* Project completion.

### Activities planned for the development process

* Software specification (or requirements engineering)
* Software development (design and implementation)
* Software verification and validation
* Software evolution (Software maintenance)
* Software Testing (for bugs and usability)

### Development model being used

* We will use the incremental developement method.
* Incremental Software Developement Model
* Use of the team Scrum also
* Agile Development Model will be used.

### Who is responsible for what

* UP960777 - mediating any issues that arise within the team.
* UP969376 - meeting attendance
* UP2028963 - leader
* UP953068 - pushing out final piece
* UP2020033 - leading the testing of code at each milestone.
* UP2016988 - Progress Report

## CW1.6 Logistics

### Meetings, communication, coordination

<!-- #### Organising project meetings -->

1. How will you organise project meetings?

* Weekly meetings on Thursdays in the library or online.
* Every member lives in Portsmouth.
* The plan B of our communication is using zoom and discord. If members of the group can’t meet up in the library, meetings will be done online.
* Zoom and discord will be used for general team communication.

2. How will you handle the communication across the team?

* Email is insufficient so, we collected each others phone numbers and discord handles.
* We keep record of our discussions and decisions in a markdown file.

3. What is your strategy in case of conflicts?

* In case of disagreement, the conflict will be resolved by the group mediator.
  * The conflicting members will sit with the meditator and discuss the issues blocking progress.

4. How will you keep track of attendance in project meetings?

* The project reports will be submitted by the group progress reporter within the progress reports folder.

5. How will you keep track of the outcomes of the meetings?

* Through our progress report
  * The progress report will be pushed onto Github for all team members to refer to after the meeting.