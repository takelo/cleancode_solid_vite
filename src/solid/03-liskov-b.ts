
export abstract class Vehicle {

    // getNumberOfSeats():number {
    //     throw Error('Method not implemented');
    // }
    abstract getNumberOfSeats(): number;

}


export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number , private fuel_consumption = 0) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle{

    constructor( private numberOfSeats: number , private fuel_consumption = 7000) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle{

    constructor( private numberOfSeats: number , private fuel_consumption = 9000) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle{

    constructor( private numberOfSeats: number , private fuel_consumption = 11000 ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle{

    constructor( private numberOfSeats: number , private fuel_consumption = 5000) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehicle{

    constructor( private numberOfSeats: number , private fuel_consumption = 17000) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}