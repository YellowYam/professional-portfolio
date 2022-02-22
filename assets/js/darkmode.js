

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

var modeToggleButton = $('#modeToggle');
var modeLabel = $('label');

var modeElements = [body, navItems, anchorTags, heading, heroSubheading, asideSectionLabels, modeLabel,
                    subheadings, aboutMeSection, projectLinks, contactItems, header, modeToggleButton];




//Changes mode
function toggleMode(event){
    event.preventDefault();
    

    switch (mode){
        case 'lightmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.addClass('darkmode');
            });
            mode = 'darkmode';
            modeToggleButton.text('Darkmode');  
            break;
        case 'darkmode':
            modeElements.forEach(jQueryReference => {
                jQueryReference.removeClass('darkmode');
            });
            mode = 'lightmode'
            modeToggleButton.text('Lightmode');  
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

modeToggleButton.on('click', toggleMode);

// On document load, setup the mode button.
// Get the mode from local storage.
(function() { try {
    if (mode === 'lightmode'){
        modeToggleButton.text('Lightmode');        
    }
    if (mode === 'darkmode'){
        modeToggleButton.text('Darkmode');
    }
  } catch (e) {} })();
