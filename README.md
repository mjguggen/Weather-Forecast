# Weather Forecast

### [Live Link](https://mjguggen.github.io/Weather-Forecast/)

## Description
I built this weather forecast application to load the upcoming weather forecast based on an inputted location and load a background video that matches the current weather conditions. 

### How was it built?
- To create the backgrounds, I first created an array that included all of the weather condition codess based on the API and the accompanying link to a video on YouTube. When the user inputs a location, a state is set for current weather code which triggers a function that loops through the array, stopping when the ID matches the current condition and returning the associated YouTube link. I used the React Player component to autoplay the background videos on mobile.
- The search input works by having an event listener check to see if the input is a string or number. If it is a string, an additional dropdown menu appears for the user to decide the state of the city they have inputted (as multiple cities may exist with the same name but in different states).
- The weekly and hourly forecast numbers and conditions are loaded using a map function to dynamically load the API data. 
- To handle errors, I wrote a function to check if the API response is valid before setting states and running additional functions
- The Sunrise/Sunset section works by getting the Unix timestamp for when the user accesses the page, calculating how much time of the day has passed, and then setting the margin of the sun based on the difference between that number and the sunrise/sunset times (from the API data).  

### Built With
- React
- Javascript
- HTML
- CSS
- Sass/SCSS
- Geocode  API
- ClimaCell API

### How I would improve this project
- Add in a search via current IP address location
- Save recent searches into local storage if the user leaves the page
- Add ability to remove from recent searches option
- Add loading screen after user inputs location
- Add transitions for videos to make the end/start seamless
- Add a forecast map

**Created by Mike Guggenbuehl**