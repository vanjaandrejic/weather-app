class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.icon = document.getElementById('w-icon');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.max = document.getElementById('w-max-temp');
        this.min = document.getElementById('w-min-temp');
        this.fl = document.getElementById('w-feels-like');
        this.humidity = document.getElementById('w-humidity');
    }

    paint(weather) {
        this.location.textContent = weather.name + ', ' + weather.sys.country;
        this.icon.src = "http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = 'Current Temperature:  ' + Math.ceil(weather.main.temp) + '°';
        this.max.textContent = 'Maximum Temperature:  ' + weather.main.temp_max + '°';
        this.min.textContent = 'Minimum Temperature:  ' + weather.main.temp_min + '°';
        this.fl.textContent = 'Feels Like:  ' + weather.main.feels_like + '°';
        this.humidity.textContent = 'Humidity:  ' + weather.main.humidity + '%';
    }
}