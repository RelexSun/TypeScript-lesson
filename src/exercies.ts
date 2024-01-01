// Lesson 3
// TODO: Define a class called Logger that takes the name of a file in its constructor and provides a method for writing messages to that file. Don’t worry about the actual file I/O operations. Just define the class with the right members.
class Logger {
  constructor(public logfile: string) {}
  log(message: string) {
    console.log(message);
  }
}

// TODO: Given the Person class below, create a getter for getting the full name of a person
class Person3 {
  constructor(public firstName: string, public lastName: string) {}
  get firstName1() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// TODO: Create a new class called Employee that extends Person and adds a new property called salary.
class Employee1 extends Person3 {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

// TODO: What is the difference between private and protected members?
// Private members are not inherited by child classes.

// TODO: Given the data below, define an interface for representing employees:
interface Address {
  street: string;
  city: string;
  zipCode: number;
}
interface Worker {
  name: string;
  salary: number;
  address: Address;
}

let employ = {
  name: "John Smith",
  salary: 50_000,
  address: { street: "Flinders st", city: "Melbourne", zipCode: 3144 },
};
