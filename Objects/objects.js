/*
TWO TYPES OF DATA TYPES 

Primitive data types 

1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.Bigint
7.Symbol

Non-Primitive data type
#There is only one type of non-primitive data type
that is called Object

Objects are further divided into three categories.

1.Object Literal
2.Arrays
3.Functions

*/


const user = {
    firstName: "deva",
    lastName: "yadav",
    age: 22,
    city: "mumbai"
}
const user2 = {
    firstName: "deva",
    lastName: "yadav",
    age: 22,
    city: "mumbai"
}

// Here firstName know as key's and "deva" is value of it
// bts this firstName is string "firstName" or firstName both are same
// If we want to name of key's like this last-name than
// we need to do it like this "last-name" 

/*
user === user2 -> false
Reason: value is same but memory-address/reference location is different that's why we get false
*/

const userName1 = ''
const userName2 = ''

// In this case this one primitive data  userName1 === userName2 because they are strings


const user3 = {
    firstName: "deva",
    "last-Name": "yadav", //if we are using key's like this-> last-Name then we need to put into string-> "last-Name" and for access this key do this -> console.log(user3["last-Name"]) 
    age: 22,
    city: "mumbai"
}

console.log(user3) // we can access like this the whole object
console.log(user3.firstName) // this one is known as dot notation
console.log(user3["firstName"])  // like this also
console.log(user3["first"+"Name"]) // like this also
// and also we can access VARIABLE
const myName = "deva"
console.log(user3[myName])
// ** if key is not present then we get undefined 



// # UPDATING THE KEY'S AND VALUES 

const user4 = {
    firstName: "deva",
}
user4.age = 21 
user4["is-student"] = ture;
console.log(user4)
// if we log it then we get the updated values also


// # OBJECTS INSIDE OBJECTS ->NESTED

const user5 = {
    firstName: "deva",
    address:{
        city: 'mum',
        pincode: 400097
    }
}

console.log(user5)
console.log(user5.address)
console.log(user5.address.city)
user5.address.weather =  "nice"// that how we update
// both object have different address/reference.