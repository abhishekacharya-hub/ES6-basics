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

  