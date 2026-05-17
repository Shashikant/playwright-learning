//Polymorphism

class Vehicle {
  drive() {
    console.log("This vehicle is moving...");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving on the road...");
  }
}

class Bike extends Vehicle {
  drive() {
    console.log("Bike is zooming through traffic...");
  }
}

const myCar = new Car();
const myBike = new Bike();

myCar.drive();
myBike.drive();