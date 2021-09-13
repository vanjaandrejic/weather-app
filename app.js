//Init storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();


// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.units);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const units = document.getElementById('changeu').value;

    // change location
    weather.changeLocation(city, units);

    // Set location in LS
    storage.setLocationData(city, units);

    // Get display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});



function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
