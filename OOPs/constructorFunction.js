/*
function getBirthYear(){
    return new Date().getFullYear() - this.age // here this will help us to access different objects
}// this getBirthYear function will create only once and gave
//  reference in every object with same memory location


function createUser(firstName,lastName,age){
    const user = {
        firstName,
        lastName,
        age,
        getBirthYear,
    }
    return user
}

const user1 = createUser('deva', 'yadav', 22)
const user2 = createUser('abhi', 'yadav', 23)


// user1.getBirthYear === user2.getBirthYear -> true 
// because this getBirthYear function is created in memory only once

// Here we achieve polymorphism means [ploy ->means many] [morph -> means diff things] only one function with different objects

// we achieve polymorphism But we break rules of Encapsulation & Abstraction

*/


// In above creatUser function if we do createUser.hello = "world"
// It will store this key value pairs and it will show hello: "world"
// because this function in bts is Object
// if we do console.dri(createUser)-> this will show every key value pairs

// so here lets write code without breaking the rule of polymo & abstra..


function createUser(firstName,lastName,age){
    const user = {
        firstName,
        lastName,
        age,
        getBirthYear: createUser.commonMethods.getBirthYear
    }
    return user
}

createUser.commonMethods = {
    getBirthYear(){
        return new Date().getFullYear() - this.age
    },
}

// Here we hide this getBirthYear function with adding another
// Object i:e commonMethods and gave access to createUser function 
// But we write some extra code do this, we can do this without writing
// this much code using Prototype js provide this Prototype


function sayHi(){
console.log('hi')
}
// console.dir(sayHi) -> if we check inside that we get prototype
// not only this function if we check any fucntion we get prototype.
// In that Prototype we get an Constructor property and that Constructor
// property represent that function

new sayHi() // if we use new keyword to call any function -> this will return by default an Object


function createUser(firstName,lastName,age){
    const user = {
        firstName,
        lastName,
        age,
    }
    return user
} 

// so in above code eg: we are creating and returning a object
// But if we use new keyword for calling the function and (this keyword ) 
// below code eg:
// here this createUser2 returns object by default

// ** constructor function

function createUser2(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
}
new createUser2("deva","yadav") // calling using new keyword
const user1 = new createUser("abhi","ydv",22) // same here

// here this createUser2.prototype -> this shows constructor function
// and this createUser2 give access to user1 of his constructor function
// user1.__proto__ -> shows same constructor
// And user1.__proto__.consturctor-> shows the whole createUser2 function
// user1.consturctor -> gave same result as above

// ➡️ below whole thing is INHERITANCE in JavaScript
// Now we are putting another function in createUser2 by using prototype

function createUser2(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
}

createUser2.prototype.getBirthYear = function (){
    return new Date().getFullYear() - this.age
}

new createUser2("deva","yadav") // calling using new keyword
const user2 = new createUser("abhi","ydv",22) // same here

// after creating another function in createUser2 
// createUser2.prototype gave us constructor and 
// And also getBirthYear function and in user2 has same functionality