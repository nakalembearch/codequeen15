console.log("My name is Shatrah");
//variables-shw an item in a code similar to a container
//declaring a variable-different ways of declaring a variable using keywords var,let,const

//var-allows to declare a variable and updateor redeclare

var name= "Shatrah";
console.log(name);
name= "nakalembe Shatrah";
console.log(name);

//let- can be updated but not redeclared
let age =28;
console.log(age);
age =12;
console.log("my age has changed",age);

//const-cannot be redeclared or updated
const country ="uganda";
console.log(country);

//data types e.g
//  string- always in quotes
let greeting = "hello";
console.log(greeting);
console.log( typeof greeting);
// "typeof" key word used to out put datatype

//number
let year = 2003;
console.log(year);
console.log(typeof year);

//Boolean-either true or false
let answer1 = true;
let answer2 = false;
console.log(answer1);
console.log(answer2);

//undefined-variable not given value
//null-no value but its intentional'similar to zero

//symbol'mathematical operators
let a = 5;
let b = 7;
console.log(a + b);//addition
console.log(a - b);//subtraction
console.log(a * b);//multiplication
console.log(a / b);//division
console.log(a % b);//Modulus
console.log(a ** b);//exponetation

//conditions in java script
//if statement
let condition = true;
let condition1 = false;
let condition2 = false;

if (condition) {
   // code to be executed if condition is true
}

//if-else statement
if (condition) {
   //
}else {
   // code to be executed if condition is false
}

//else-if statement
if (condition1) {
  //code to be executed if condition is true
}else if(condition2) {
  //code to be executed if condition is true  
}else  {
    //code to be executed if condition1 and condition2 are false  
}




let mark = 79;
if(mark > 69) {
    console.log("very good, you have passed the exam");
}

if(mark >= 70){
console.log("you have passed the exam");
} else{
    console.log("you have failed the exam");
}

//Operators
//equal to(==)
//not equal to(!=)
//strict equal to(===)
//strict not equal to(!==)
//greater than(>)
//Less than(<)
//greater than or equal to(>=)
//less than or equal to(<=)


//arrays
//[1,2,3,4]
//["kampala","jinja","gayaza"]


let cars = ["volvo","benz","toyota"];
console.log(cars);
console.log(cars[2]);//accessing the third element

let mixedArray = ["vovlo",25,"uganda",{name: "John" }];
console.log(mixedArray);
console.log(mixedArray[3]);

//objects
//an empty object
let person = {
    name: "John",
    age: 30,
    contry:"Uganda",
    isstudent:false,
    hobbies:["singing","dancing"],
    address: {
        street: "123 Main street",
        city: "kampala",
        country: "Uganda"
    }
}
console.log(person);
console.log(person["name"]);
console.log(person,age);

//loops-look through an array and return a specific item

let score = [
    {name: "justine",score: 85},
    {name: "annet",score: 63},
    {name: "Obbo",score: 75},
    {name: "resty",score: 57},
    {name: "martin",score: 39},
    {name: "liz",score: 95}
];



score.forEach(student =>{
    let grade;

    if(student.score >= 90){
        grade = "A"
    }else if(student.score >= 80) {
grade = "B"
 }else if(student.score >= 70) {
grade = "C"
}else if(student.score >= 60) {
grade = "D"
}else if(student.score >= 50) {
grade = "E"
}else{
    grade = "F"
}
console.log(student.name + "" + student.score + "" + grade);
}

)


//Functions are reusable blocks of code that perform a specific task
function functionName() {
    //code to be executed
}

function funcName(parameter){
    //code to be executed
    return parameter;// returning parameter
}

function funcWithParameters(parameter1,parameter2,parameter3){
    //code to be executed
    return parameter1 + parameter2 + parameter3;//returning the sum
}
function returnSomeValue(){
    let value = "This is my first working function in Javascript"

    console.log(value);
}
returnSomeValue();

function returnParameter(parameter){
    return parameter;
}

//console.log (returnParameter("this is my second function in javascript"));
const result = returnParameter("this is my second function in javascript");
console.log(result);

function addNumbers(x,y){
    return x+y;
}
const sum = addNumbers(5,6)
console.log(sum);


//loops types
//FOR loop-has three parts
//initialization-sets up the counter variable e.g let i = 2(runs once)
//condition:checked before each iteration.
//update;an expression to increament or decreament the counter after each iteration

//increment
for(let i= 0; i<7; i++){
    console.log(i);
}

//decrement
for(let i=7; i>0; i--){
    console.log(i);
}

 cars = ["volvo","Benz","toyota","subaru"];
const numberofcars = cars.length;
console.log(cars);
console.log(numberofcars);// gives number of cars


for(let i = 0; i< cars.length; i++){
    console.log(cars[i]);
}
//WHILE-repeats the a block of code as long as a condition remains true

let count = 0;
while(count<3){
    console.log("count is: "+count);
    count++;
}


//incrementing
let id = 0;
while(id < 7){
   console.log("from the while loop",id);
    id++;
}

//decrementing
let id2 = 7;
while(id2 > 7){
   console.log("from the while loop",id2);
    id2++;
}


}
//DO WHILE
//do{
    //code to be executed
//}while(condition);

let i = 0;
do{
    console.log("from the do-while loop", i);
    i++;
}while(i < 7);


const traditionalFunction= function(){
console.log("This is a traditional function")
}
traditionalFunction();
//arrow function expression
const arrowFunc=() => {
    console.log("This is an arrow function")
}
arrowFunc();
//arrowFunc for parameters
const add = (a,b) => {
    console.log(a+b)
}
add(5,6)
//JSON(Js object notation)
const task ={
    id: 1,
    title: "complete JavaScript assignment",
    completed: false
}
console.log(task);
//JSON string
const taskJSON = JSON.stringify(task);
    console.log(taskJSON);
    //Parsing JSON string back to Javascript object
    const parsedTask = JSON.parse(taskJSON);
    console.log(parsedTask);

    //Local storage
    localStorage.setItem("name","shatrah");
localStorage.setItem("task",taskJSON);


//Retrieving data
const nameFromStorage = localStorage.getItem("name");
console.log("name from local storage: ", nameFromStorage);

const taskFromStorage = localStorage.getItem("task")
console.log(taskFromStorage);
