/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let navbar__list = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function create_section() {
    for (let i = 0; i < sections.length; i++) {
        let list = document.createElement("li")
        list.className = "menu__link"
        let sectionId = sections[i].getAttribute("id");
        let sectionname = sections[i].getAttribute("data-nav");
        list.innerHTML = `<a class="menu__link "  class="your-active-class" data-id="${sectionId}"> ${sectionname} </a>`;
        navbar__list.appendChild(list)


    }
}



// Scroll to section on link click
function scrollToElement(event) {
    if (event.target.nodeName === "A") {
        const sectionId = event.target.getAttribute("data-id");
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// when user clicks access to the target
navbar__list.addEventListener("click", function (event) {
    scrollToElement(event);
});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// function isInViewport(elem) {
//     let bounding = elem.getBoundingClientRect();//مقاسات المحيط بالسيكشن  وبعده عن الاعلى من الصفحه
//     return bounding.top >= 0;
// }
// set Active section


function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    return bounding.top >= -400 && bounding.top <= 150;


}


// set Active section
document.addEventListener("scroll", function () {
    for (active of sections) {
        // sections.forEach((active) => {
        let activeLink = navbar__list.querySelector(`[data-nav=${active.id}]`);
        if (isInViewport(active)) {
            if (!active.classList.contains("your-active-class")) {
                active.classList.add("your-active-class");

                let selector = `[data-id=${active.id}]`;
                console.log(selector);

                document.querySelector(selector).classList.add("active");
            }
        } else {
            let selector = `[data-id=${active.id}]`;
            // console.log(selector);

            document.querySelector(selector).classList.remove("active");
            active.classList.remove("your-active-class");

        }
    }

});

create_section();

let topbutton = document.getElementById("topbutton");
console.log(topbutton);
const clicktotp=() => {
   

    topbutton.addEventListener("click", (eo) => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
    });
});
};

clicktotp()
// Build menu


// Scroll to section on link click

// Set sections as active

