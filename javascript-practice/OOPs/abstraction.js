//Abstraction

class Vehicle {
  start() {
    throw new Error("Method 'start()' must be implemented");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car engine started...");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike engine started...");
  }
}

class Truck extends Vehicle {
  start() {
    console.log("Truck engine started...");
  }
}

const myCar = new Car();
const myBike = new Bike();
const myTruck = new Truck();

myCar.start();
myBike.start();
myTruck.start();