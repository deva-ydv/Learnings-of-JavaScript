// class CreateUser {
//   constructor(firstName, lastName, age) {
//     // console.log(a, b, c); // only this constructor function has access run the code
//     // this function show the result of user1 and user2
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//     // inside this code will not run
//     // console.log(hiiii) this will not show on console
//   }
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   // by doing this all of this methods set into prototype of this class CreateUser
//   // getBirthYear() and getFullName methods of prototypes
// }

const user2 = new CreateUser("abhi", "ydv", 11);
const user1 = new CreateUser("deva", "ydv", 22);

// ➡️ Above code can be modified easily and it's a public class
// eg:- This.age = age this code can be modified easily by accessing
// To avoid this we can use private fields
// this.#age = age so now by using # this value is private now we can't access outside
// and also we need to put that key outside of the consturctor and class that has access below code eg:-

class CreateUser {
  #age;//#age
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age; //#age
  }

  #getBirthYear() {
    return new Date().getFullYear() - this.#age;//#age
  }
  getFullName() {
    this.#getBirthYear() // we can use here 
    return this.firstName + " " + this.lastName;
  }
}

// not only fields we can also create private methods class above 
// #getBirthYear() is now a private property



// above private code is very new, right now not used majorly
// Let's see in our Normal Objects

const a = {
  name: "deva",
  '#age': 22 // we can't use here # directly, need to put in string
}
// now this code is private property but this is not a truly private property
// we can still access like this-> a['age']
