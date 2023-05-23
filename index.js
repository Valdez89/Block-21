// I am going to write a constructor function called Car.
// Car will create a new object with the following properties  : make, model, and year.

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

// Below I will add a method to the Car Prototype.
// It will be called getDescription.
// getDescription will return a string containing information about the car.

Car.prototype.getDescription = function() {
    return this.make + ' ' + this.model + ' ' + this.year;
}

// Defining the ElectricCar function.

function ElectricCar(make, model, year, range) {
    // I will be calling the parent constructor to check for proper initialization.

    Car.call(this, make, model, year);
  
    this.range = range;
}

// I will be creating a new object that inherits from Car.prototype.

ElectricCar.prototype = Object.create(Car.prototype);

// Next I will set the constructor property to ElectricCar.

ElectricCar.prototype.constructor = ElectricCar;

// Overriding getDescription method.

ElectricCar.prototype.getDescription = function() {
    let description = Car.prototype.getDescription.call(this);
    return description + ', ' + this.range + ' miles range';
}

// Last I am creating a new ElectricCar instance.

let myCar = new ElectricCar('Tesla', 'Model S', 2019, 300);

// Logging to get results of the variable myCar.

console.log(myCar.getDescription());