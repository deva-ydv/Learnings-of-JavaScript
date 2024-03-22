/*

OOP and Factory Function

Four Pillars of Oject Oriented Programming

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

*/

//-----------------------------------------------------------------------------------

/*

const user = {
    firstName: "deva",
    age: 22
}

function getAgeYear(age){
    return new dateFullYear() -age
}
getAgeYear(user.age) -> output  2002

➡️ This type of code is not under oop programming 
➡️ This one is procedural/functional programming

*/

// ----------------------------------------------------------------------------------

/*
1.Encapsulation -> also known as data hiding method

const user = {
    firstName: "deva",
    age: 22,
    getAgeYear: function(){
        return new Date().getFullYear() - user.age
    },
}
user.getAgeYear() -> 2002
➡️ This program is oop program,putting different things at one place also known as Encapsulation
➡️ But this program as of now is not hidden we can still
access this from outside we will see later how to hide this fully

*/

// ---------------------------------------------------------------------------------------

/*
2.Abstraction 

➡️ Abstraction in JavaScript refers to the concept of hiding the complexity
of a piece of code and **exposing only the necessary functionalities or interfaces**


➡️ we already achieve this in above Encapsulation code

const user = {
    firstName: "deva",
    age: 22
}

function getAgeYear(age){
    return new dateFullYear() - age
}
getAgeYear(user.age) -> output  2002

*/


/*

➡️ # Factory Function in Js

function createUser(firstName, lastName, age){
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return user
}

calling -> createUser('deva', 'yadav', 22) -> gives us object with the values

we can do like this also and we get same result as above

function createUser(firstName, lastName, age){
    const user = {
        firstName,
        lastName,
        age
    }
    return user
}


➡️ Another good eg:
// Factory function example: Person
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

// Usage
const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

➡️ But in this eg we are creating new functions for every next persons
to solve this we need constructor function we will see this later

*/
