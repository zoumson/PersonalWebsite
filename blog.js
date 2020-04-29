/* use title tells which page is loaded in window */
var title = document.title;

/* sidebar click event trigger closing of actual page and openning of the button pressed page */
/* home button pressed */
var homeButton = document.querySelector('#sidebar-home-text');
homeButton.addEventListener('click', () => {
  /* do nothing if actual page is home page */
  if (title != 'home') {
    window.close('about.html');
    window.open('index.html');
  }
});

/* about button pressed */
var aboutButton = document.querySelector('#sidebar-about-text');
aboutButton.addEventListener('click', () => {
  /* do nothing if actual page is about page */
  if (title != 'about') {
    window.close('about.html');
    window.open('about.html');
  }
});

/* blog button pressed */
var blogButton = document.querySelector('#sidebar-blog-text');
blogButton.addEventListener('click', () => {
  /* do nothing if actual page is blog page */
  if (title != 'blog') {
    window.close('about.html');
    window.open('blog.html');
  }
});

/* contact button pressed */
var contactButton = document.querySelector('#sidebar-contact-text');
contactButton.addEventListener('click', () => {
  /* do nothing if actual page is contact page */
  if (title != 'contact') {
    window.close('about.html');
    window.open('contact.html');
  }
});

/* end of sidebar button clicking event */

/* first row  openWeather data */
var displayWeather = document.querySelector('.display-weather');
displayWeather.style.display = 'none';
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var lang = document.querySelector('#language-weather');

button.addEventListener('click', function (name) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      input.value +
      '&units=metric&lang=' +
      lang.value +
      '&appid=175b28da175281d658fb44c66ee1c7c6'
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      main.innerHTML = nameValue;
      desc.innerHTML = 'Desc - ' + descValue;
      temp.innerHTML = 'Temp - ' + tempValue;
      displayWeather.style.display = 'block';
      input.value = '';
      var xButton = document.querySelector('.xSubTitleClose');
      xButton.addEventListener('click', () => {
        displayWeather.style.display = 'none';
      });
    })

    .catch((err) => alert('Wrong city name!'));
});
