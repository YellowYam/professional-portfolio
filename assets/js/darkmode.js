// Load the saved mode on page load
$(document).ready(function () {
    //A boolean value that determines the state of the mode
    mode = localStorage.getItem('codysprofilemode');
    if(!mode){
        mode = 'lightmode';
    }
    initializeMode();
});


//References for document elements affected by the color
//scheme change.
var body = $('body');
var header = $('header');
var navItems = $('header nav ul li');
var anchorTags = $('a');
var heading = $('h1');
var heroSubheading = $('#hero-subheading');
var asideSectionLabels = $('aside.section-label');
var subheadings = $('h2');
var aboutMeSection = $('p.about-me');
var projectLinks = $('a.project');
var contactItems = $('div.contact-item, a.contact-item');

var modeToggleButton = $('#modeToggle');
var modeLabel = $('label');

var modeElements = [body, navItems, anchorTags, heading, heroSubheading, asideSectionLabels, modeLabel,
    subheadings, aboutMeSection, projectLinks, contactItems, header, modeToggleButton];


    //Gets current mode
function getMode() {
    console.log("Portfolio is in " + mode + ".");
};

//Saves mode to local storage
function saveMode() {
    localStorage.setItem('codysprofilemode', mode);
};

//Loads initial mode
function initializeMode() {

    console.log('Initializing ' + mode);

    switch (mode) {
        case 'lightmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.removeClass('darkmode');
            });
            saveMode();
            modeToggleButton.text('Lightmode');
            break;
        case 'darkmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.addClass('darkmode');
            });
            saveMode();
            modeToggleButton.text('Darkmode');
            break;
        default:
            mode = 'lightmode';
            break;
    }

};



modeToggleButton.click(function (event) {
    event.preventDefault();

    switch (mode) {
        case 'lightmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.addClass('darkmode');
            });
            mode = 'darkmode';
            saveMode();
            modeToggleButton.text('Darkmode');
            break;
        case 'darkmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.removeClass('darkmode');
            });
            mode = 'lightmode';
            saveMode();
            modeToggleButton.text('Lightmode');
            break;
        default:
            mode = 'lightmode';
            break;
    }
});














