class Storage {
    constructor() {
        this.city;
        this.units;
        this.defaultCity = 'Belgrade';
        this.defaultUnits = 'metric';
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('units') === null) {
            this.units = this.defaultUnits;
        } else {
            this.units = localStorage.getItem('units');
        }

        return {
            city: this.city,
            units: this.units,
        }
    }

    setLocationData(city, units) {
        localStorage.setItem('city', city);
        localStorage.setItem('units', units);
    }
}