export class Tesla {

    constructor( private numberOfSeats: number , private fuel_consumption = 0) {}
    
    getNumberOfTeslaSeats() {
        return this.numberOfSeats;
    }
}

export class Audi {

    constructor( private numberOfSeats: number , private fuel_consumption = 7000 ) {}

    getNumberOfAudiSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota {

    constructor( private numberOfSeats: number , private fuel_consumption = 9000) {}

    getNumberOfToyotaSeats() {
        return this.numberOfSeats;
    }
}

export class Honda {

    constructor( private numberOfSeats: number , private fuel_consumption = 11000) {}

    getNumberOfHondaSeats() {
        return this.numberOfSeats;
    }
}