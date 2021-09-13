class Weather {
    constructor(city, units) {
        this.apiKey = 'c083d6b58e0ccccbe2d6dd1628b83d27';
        this.city = city;
        this.units = units;
    }

    // Fetch weather from Api
    async getWeather(city, units) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=${this.units}&appid=${this.apiKey}`);

        const responseData = await response.json();

        return responseData;

    }

    // Change weather location

    changeLocation(city, units) {
        this.city = city;
        this.units = units;

    }

}