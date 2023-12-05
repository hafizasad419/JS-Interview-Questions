// "use strict"

//Problem #1

function showData() {
    console.log("variable name is", myName);
    console.log("variable name is", age);

    // var myName = "Asad Riaz";
    // let age = 19
}

// showData()
//ReferenceError: Cannot access 'age' before initialization

// explaination: var has global scope and can be accessed even before its initialization (Javascript moves declaration to the top but whwnever you access a variable before initialization it will store undefined in it) but let is block scoped and can only be used after intialization in JS.


//Problem #2

for (var i = 0; i < 4; i++) {

    // setTimeout(() => (console.log(i)), 5)

}


for (let i = 0; i < 4; i++) {

    // setTimeout(() => (console.log(i)), 5)

}


//var shares the same value of `i` (which is 4 in this case) and give it to setTimeout() each time.
//But
//let is block scoped so it creates a new variable for each iteration and gives new values (0,1,2,3 in this case) to setTimeout() each time.


// Problem #3

let income = {
    skills: 3,
    monthly() {
        return this.skills * 3
    },
    yearly: () => (888 * this.skills)

}

// console.log(income.monthly());
// console.log(income.yearly());

//this keyword is recommended in functions which are declared with function keyword

// In arrow functions, `this` keyword always refers to its parent scope, and in this case parent of arrow function is window object and .skills method does not exist in window object.

//Problem #4

// console.log(+true);
// console.log(!"Javascript");

//whenever we use `+` operator with any data type, it always try to convert that data in number so in this case, because of because true=1 +true= +1 === 1

//henever we use negation operator `!` with any data type, it always try to convert that data in boolean (opposite boolean, if value is true or truthy it makes data false and vice versa) so in this case, "Javascript" was considered true value, so negation operator converted it into false.



//Problem #5
//only accessing values
let language = {
    langName: "Javascript",

};

let ReactJS = {
    ext: "JS",
    isOn: true,

};

// console.log(language[language.langName]) // when our key is stored in a variable.

// console.log(language["langName"]);



//Problem #6

// let greetingsObj = { greetings: "Hey There" };

// let newObj = greetingsObj;

// newObj.greetings = "How are you?"

// console.log(greetingsObj.greetings);

//It will change original value because JS Objects are stored in heap memory and when we create its copies, it gives the original refrence to its copy so when we make any change in copied values, it also changes original values. 

//to resolve this issue in some use cases we can use some alternatives like

// Object.assign()
// let newObj = {...Content Here} //object de-structuring
// let newNestedObj = structuredClone(content here)
//Always keep refrencing in mind while working with objects.

//Problem #7

// let myNum = 7
// let myNewNum = new Number(7)
// let anotherNum = 7
// console.log(typeof myNewNum);
/* console.log(myNum == myNewNum); //true,coz of no data-type checking, 
== only checks the values but not data-type of the values.*/

// console.log(myNum === myNewNum);//false number and objects (Number has object data type) are two different data types.

// console.log(myNewNum === anotherNum); //false, same reason.


//Problem #8
//class, static method, constructor
//left for later, coz it's advanced and i'm still a beginner pretty much.


//Problem #9


// let message;

// massage = [{ myName: "Asad" }] //intentionally making mistake in spellings

// console.log(massage); //no error, but if we use ` "use strict" ` at the start of program, then it says "massage is not defined otherwise javascript defines and add variables in window object by itself if we do not declare variables with a keyword (let, const. etc)"

// Problem #10


function showTemp() {
    console.log(showTemp.currentTemp);
}

// showTemp(); //undefined
// showTemp.currentTemp = 20


// showTemp()

//in fir log, currentTemp was not defined and was not assigned any values so thats why it was returning undefined, but in second console log, value was defined, declared and assigned (initialized).









