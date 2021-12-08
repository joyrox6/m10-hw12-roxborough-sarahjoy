// Create a class named car
// Use class to create objects that have 3 properties

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    
    honk() {
        console.log('BEEP BEEP!');
    }

}

    setTimeout(function() {
    console.log('maintenance complete')
}, 3000);


/* const myCar = new Object();
myCar.make = 'Honda';
myCar.model = 'Mustang';
myCar.year = '1969'; */

// Include 'honk' method


// Create a variable named mySweetRide and assign it to a car created with your class using the following arguments:
// Make: 'Pontiac'
// Model: 'Fiero'
// Make: 1988

var mySweetRide = new Car('Pontiac', 'Fiero', 1988)


// Call mySweetRide's 'honk' method once
mySweetRide.honk()


// Call mySweetRide's performMaintenance method once 
mySweetRide.performMaintenance()