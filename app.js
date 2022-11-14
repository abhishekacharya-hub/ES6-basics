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
let a = 10, 
    b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10

//assigning the rest of an array to a variable
let [a,...b] = [1,2,3]
console.log(a);
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
