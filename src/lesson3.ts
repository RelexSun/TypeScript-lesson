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