/* use title tells which page is loaded in window */
var title = document.title;

/* sidebar click event trigger closing of actual page and openning of the button pressed page */
/* home button pressed */
var homeButton = document.querySelector("#sidebar-home-text");

homeButton.addEventListener('click', () => {
    /* do nothing if actual page is home page */
    if (title != 'home') {
        window.close("about.html");
        window.open("index.html");
    }

});

/* about button pressed */
var aboutButton = document.querySelector("#sidebar-about-text");
aboutButton.addEventListener('click', () => {
    /* do nothing if actual page is about page */
    if (title != 'about') {
        window.close("about.html");
        window.open("about.html");
    }
});

/* blog button pressed */
var blogButton = document.querySelector("#sidebar-blog-text");
blogButton.addEventListener('click', () => {
    /* do nothing if actual page is blog page */
    if (title != 'blog') {
        window.close("about.html");
        window.open("blog.html");
    }
});

/* contact button pressed */
var contactButton = document.querySelector("#sidebar-contact-text");
contactButton.addEventListener('click', () => {
    /* do nothing if actual page is contact page */
    if (title != 'contact') {
        window.close("about.html");
        window.open("contact.html");
    }
});

/* end of sidebar button clicking event */
