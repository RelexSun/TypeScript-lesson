// --------------- Type Aliases -------------
// similar to schema + we can reuse this anywhere in the app
// this is how we define objects type
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "sun",
  retire: (date: Date) => {
    console.log(date);
  },
};
// ----------------------------------------------------
// --------------- Union Types -------------
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// ----------------------------------------------------
// --------------- Intersection Types -------------
let weight: number & string; // impossible

// possible
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ----------------------------------------------------
// --------------- Literal Types -------------
// Literal (exact, specific), tells the exact type
type Quantity = 50 | 100;
let quantity: Quantity = 50; // the quanity type can only be 50 or 100

// ----------------------------------------------------
// --------------- Nullable Types -------------
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  else console.log("hola");
} // To turn types into nullable types just give it a default value, so if you pass null into the function it will automatically display the default value. same goes to all truthy and falsy type. Just give it a union type if you wanna pass it.

greet(null);

// ----------------------------------------------------
// --------------- Optional Chaining -------------
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// if (customer !== null &&customer !== undefined) console.log(customer.birthday); not clean use optionalchaining
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.("a"); // get executed if log is referencing some value otherwise we get undefined

// ----------------------------------------------------
// --------------- The Nullish Coaelscing Operator -------------

let speed: number | null = null;
let ride = {
  // Falsy (undefined, null, '', false, 0)
  // 0 is also valid when it comes to speed values so we need to check otherwise the 0 will be ignored
  // speed: speed !== null ? speed : 30, long ass code
  speed: speed ?? 30, // Nullish coalescing operator
};

// ----------------------------------------------------
// --------------- Type Assertions --------------------
let phone = <HTMLInputElement>document.getElementById("phone");

// let phone = document.getElementById('phone') as HTMLInputElement;
// HTMLElement
// HTMLInputElement
phone.value;

// ----------------------------------------------------
// --------------- The unknown Type --------------------
function render(document: unknown) {
  // if we use the any type we the app will crash before we know it
  // Narrowing
  if (document instanceof WordDocument) {
    // The WordDocument is our custom type (will learn in the next section)
    document.toLocaleLowerCase();
  } // The typeof operation is only for the primitive types (number, string, boolean...) but custom objects or classes we have to use instanceof
  document.move();
  document.fly();
  document.whateverWeWant();
}

// ----------------------------------------------------
// --------------- The never Type --------------------
function processEvents(): never {
  while (true) {
    // Read a message from a queue
  }
}

processEvents();
console.log("Hello World");
