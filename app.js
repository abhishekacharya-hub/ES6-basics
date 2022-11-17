let x= 10;
if( x === 10) {
    let x = 20
    console.log(x); //20
}
console.log(x) //10

//arrow funtion

//with function expression
let add = function (x, y) {
    return x + y;
  };
  console.log(add(12, 23));

//with arrow funtion
let add1 = (x, y) => {
    return x + y;
  };
  console.log(add1(23, 34));


//arrow function with no arg
let greet = () => console.log("hello")
greet();

//arrow functin with one arg
let greet1 = x => console.log(x)
greet('hello');

//with dynamically created function as an function expreesion
let age = 26;
let welcome =
  age > 18
    ? () => console.log("person is adult")
    : () => console.log("person is child");
welcome();

//with multiline arrow function
let area = (r) => {
    const Pi = 3.14;
    return Pi * r * r;
  };
  console.log(area(10));

//rest parameter
function sum(...args) {
  return args.reduce((acc, curr) => {
    return acc + curr;
  });
}
console.log(sum(2, 23, 43, 45));

//spread operator
const odd = [1,3,5,7,9]
const even = [2,4,6,8]
const number = [...odd, ...even]
console.log(number);

//for of (iterating over the array)
const interable = [1,2,3,4,5]
for(const value of interable) {
  console.log(value)
}

//iterating over a string
const inter = "hello"
for(const values of inter) {
  console.log(values)
}

//iterating ovr a map
const iterables = new Map([
  ["A", 10],
  ["B", 20],
  ["C", 30],
  ["D", 40]
]);
for (const [key, value] of iterables) {
  console.log(key + "->" + value);
}

//template literal
let str = "world"
let msg = `hello ${str}`;
console.log(msg);

//multiline template literal
let str1 = "multiline \n\ str"
console.log(str1);


//array destructure

//basic variable assignment
const key = ["one","two","three"]
const [red,green,blue] = key;
console.log(red);  //red
console.log(green);  //green
console.log(blue);  //blue

//assignment separate from declaration
const [a,v] = [12,23]
console.log(a);
console.log(v);

//array destructure and default value
const [t=10,y=20] = [30]
console.log(t);
console.log(y);

//swapping variable
let ac = 10, 
    bc = 20;

[ac, bc] = [bc, ac];

console.log(ac); // 20
console.log(bc); // 10

//assigning the rest of an array to a variable
let [at,...b] = [1,2,3]
console.log(at);
console.log(b);

//function that return multiple values
function calculate(a, b) {
  return [a + b, a - b, a * b];
}
let [sum, diff, mul] = calculate(12, 23);
console.log(sum, diff, mul);


//object destructuring
const employee = {
  id: "11223",
  namee: "abhishek acharya",
  email: "abhi@gmail.com"
};
const { id, namee, email } = employee;
console.log(id);
console.log(namee);
console.log(email);


//class
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
let person = new Person("abhishek acharya");
console.log(person.getName());


//get and set
class Person1 {
  constructor(name) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}

let person2 = new Person1("romalin fox");
console.log(person2.getName);


//Static methods
/*Static methods are often utility functions, such as functions to create or clone objects,
 whereas static properties are useful for caches, fixed-configuration, 
 or any other data you don't need to be replicated across instances. */
class Person2 {
  constructor(name) {
    this.name = name;
  }
  static staticMethod(gender) {
    let name = gender === "male" ? "rizwan shah" : "ramiza shah";
    return new Person2(name)
  }
}
let annonymous = Person2.staticMethod("male");
console.log(annonymous)


//computed property
/*ES6 "Computed Property" feature allows you to have an expression in brackets [] 
(a piece of code that results in a single value like a variable or function invocation) be 
computed as a property name on an object. */
let PropName = "fullName";
class Person3 {
  constructor(firstName,lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  get [PropName] () {
    return `${this.firstName} ${this.lastName}`
  }
}
let person4 = new Person3("ritvik shami")
console.log(person4.fullName)

//inheritance
//parent class
class Vehical {
  constructor(name,type) {
    this.name = name;
    this.type = type;
  }
  getName() {
    return this.name
  }
  getType() {
    return this.type
  }
}
//child class
class Car extends Vehical{
  constructor(name) {
    super(name, "car")
  }
  getName() {
    return "this car is :" + super.getName()
  }
}
let car = new Car("tesla");
console.log(car.getName());
console.log(car.getType());

//promise() 

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise started...");
    resolve("Promise resolved");
  }, 300);
})
  .then((value) => {
    console.log("OK: " + value);
  })
  .catch((value) => {
    console.log("ERROR: " + value);
  })
  .finally(() => {
    console.log("Final Block");
  });

//promise chaining
let prom = new Promise((resolve, reject) => {
  setTimeout(() => resolve("1"));
})
  .then((result) => {
    alert(result);
    return result * 2;
  })
  .then((result) => {
    alert(result);
    return result * 2;
  })
  .then((result) => {
    alert(result);
    return result * 2;
  });

//promise all
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the first promise has solved");
    resolve(10);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the second promise has solved");
    resolve(20);
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the third promise has solved");
    resolve(30);
  }, 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`results : ${results}`);
  console.log(`total : ${total}`);
});

//promise.race
const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the first promise has resolved");
    resolve(10);
  }, 1000);
});
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("the second promise has resolved");
    resolve(20);
  }, 1000);
});

Promise.race([prom1, prom2])
  .then((result) => console.log(`resolved : ${result}`))
  .catch((reason) => console.log(`rejected : ${reason}`));
