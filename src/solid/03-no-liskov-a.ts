import { Tesla, Audi, Toyota, Honda } from './03-no-liskov-b';

//No respeta liskov: Las clases Tesla, Audi, etc deberian ser subtituidas por otra general

(() => {
    
    const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda)[] ) => {
        

        //No respeta open and close , tengo que modificar esto si agrego una nueva clase
        for (const car of cars) {
         
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfTeslaSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfAudiSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfToyotaSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfHondaSeats() )
                continue;
            }         

        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();