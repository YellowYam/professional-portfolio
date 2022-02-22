// On document load, get the mode from local storage
(function() { try {
    var mode = localStorage.getItem('lightDarkMode');
    if (!mode) return;
  } catch (e) {} })();


//A boolean value that determines the state of the mode
var mode = 'lightmode';

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

var modeElements = [body, navItems, anchorTags, heading, heroSubheading, asideSectionLabels,
                    subheadings, aboutMeSection, projectLinks, contactItems, header];




//Changes mode
function toggleMode(){
    debugger;
    switch (mode){
        case 'lightmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.addClass('darkmode');
            });
            mode = 'darkmode';
            break;
        case 'darkmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.removeClass('darkmode');
            });
            mode = 'lightmode'
            break;
        default: 
            mode = 'lightmode';
            break;
    }


};


//Gets current mode
function getMode(){
    console.log("Portfolio is in " + mode + ".");
};