// ----------- The problem of generic -------------
// class KeyValuePair {
//   constructor(public key: number, public value: number) {}
// }

// class StringKeyValuePair {
//   constructor(public key: string, public value: string) {}
// }

// let pair = new StringKeyValuePair("1", "Apple");

// ----------- Generic Classes ----------------
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair("1", 5);
// pair.key.

// ----------- Generic Function ----------------
class ArrayUtils {
  static wrapeInArray<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils.wrapeInArray(1);

// ----------- Generic Interface ----------------
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<Product>("url");
// result.data.

// ----------- Generic Constraints ----------------
class Human {
  constructor(public name: string) {}
}

class Customers extends Human {}

function echo<T extends Human>(value: T): T {
  return value;
}

echo(new Customers("a"));

// ----------- Extending Generic Classes ----------------
interface Products {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Products>();
store.add({
  name: "a",
  price: 1,
});
store.find("name", "a");
store.find("price", 1);
store.find("nonExistingProperty", 1);

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class ProdcutStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

// ----------- Type Mapping ----------------
interface Product2 {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  // Index signature
  // keyof
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<Product2> = {
  name: "a",
  price: 1,
};
