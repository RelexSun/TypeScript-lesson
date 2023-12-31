class Account {
  // TODO: properties
  // readonly id: number; // immutable
  // owner: string;

  // TODO: convention use _ for private properties
  // private _balance: number;
  // TODO: all the property are public by default which means that we can mutate it anywhere of the app but by using private we can mutate it only within it class. ALSO works on methods, parameters

  nickname?: string; // optional property

  // TODO: The id, owner, and balance parameters are used to set the initial state of the object.
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }

  deposit(amount: number): void {
    // method
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  } // if we wanna see some private properties

  // mutate a private property
  // set balance(value: number) {
  //   if (value < 0) throw new Error("Invalid value");
  //   this._balance = value;
  // }
}

let account = new Account(1, "Mosh", 0); // create a new object
account.deposit(100);
console.log(account instanceof Account);
// use instanceof to check whether the type of the custom object is an instance of a given class
console.log(account.balance);

// --------- index signature -------------------
class SeatAssignment {
  // A1, A2, ...
  // Mosh, John,....
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Sun";
seats.A2 = 1; // error

// --------- static members -------------------
class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }
  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// ------------- Inheritance -------------------
// for best practice we should seperate classes into different files
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("walk");
  }
}

class Student extends Person {
  constructor(
    public id: number,
    firstName: string,
    lastName: string,
    age: number
  ) {
    // Inheritance
    super(firstName, lastName, age);
  }
  takeTest() {
    console.log("Take test");
  }
}

let student = new Student(1, "Sun", "Nop", 20);
