//Encapsulation

class Car {
    #fuel = 0; // private field

    refuel(liters) {
        this.#fuel += liters;
        console.log(`Added ${liters}L of fuel.`);
    }

    drive() {
        if (this.#fuel > 0) {
            this.#fuel--;
            console.log("Car is driving...");
        } else {
            console.log("No fuel left!");
        }
    }

    getFuelLevel() {
        return this.#fuel;
    }
}

const myCar = new Car();
myCar.refuel(2);
myCar.drive(); // Car is driving...
console.log("Fuel level:", myCar.getFuelLevel() + "L"); // 1
//myCar.#fuel //(Error: private field)