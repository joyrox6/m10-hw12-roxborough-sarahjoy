// Create a class named car
/*class Car {
    constructor(type) {
        this.type = type
    }
} */

// Use class to create objects that have 3 properties
class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    honk() {
        console.log('BEEP BEEP!')
    }
}

var performMaintenance = setTimeout(function() {
    console.log('maintenance complete')
} , 3000)


/* const myCar = new Object();
myCar.make = 'Honda';
myCar.model = 'Mustang';
myCar.year = '1969'; */

// Include 'honk' method


// Create a variable named mySweetRide and assign it to a car created with your class using the following arguments:
// Make: 'Pontiac'
// Model: 'Fiero'
// Make: 1988


// Call mySweetRide's 'honk' method once


// Call mySweetRide's performMaintenance method once 