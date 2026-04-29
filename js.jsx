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
