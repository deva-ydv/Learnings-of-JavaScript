function createUser2(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
}

createUser2.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};
createUser2.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.lastName;
};

new createUser2("deva", "yadav"); // calling using new keyword
// const user2 = new createUser("abhi","ydv",22) // same here

// above code eg is good but we are creating every time new
// prototype this looks broken to avoid this we gonna use Classes

// ➡️ Classes

class CreateUser {
  // creating class
}

// typeof CreateUser -> function
// console.log(CreateUser) -> class
//  CreateUser() -> can't invoked without new keyword
// new CreateUser() -> give us an Object

class CreateUser {
  constructor(firstName, lastName, age) {
    // console.log(a, b, c); // only this constructor function has access run the code
    // this function show the result of user1 and user2
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
    // inside this code will not run
    // console.log(hiiii) this will not show on console
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  // by doing this all of this methods set into prototype of this class CreateUser
  // getBirthYear() and getFullName methods of prototypes
}

const user2 = new CreateUser("abhi", "ydv", 11);
const user1 = new CreateUser("deva", "ydv", 22);



