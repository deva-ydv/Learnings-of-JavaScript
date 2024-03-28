// 1.
console.log(this); // points to window object in global scope

// 2.
function hii() {
  console.log("hii");
}
// 3.
hii(); // so here hii() function point to window object

window.hii(); // we can also calls this hii() like this
// 4.
const user = {
  firstName: "name",
  lastName: "singh",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
user.fullName(); // now here this keyword point towards user object

// 5.

const user1 = {
  firstName: "name",
  lastName: "singh",
  fullName() {
    function getAge() {
      console.log("age");
      console.log(this);
    }
    getAge();
  },
};

// now here getAge() is not going to point user1 instead its point to the window object
// because we are defining a function getAge() in method fullName()
// if we use arrow function then this function won't be accessible

// 6.

const user2 = {
  firstName: "name",
  lastName: "singh",
  tags: ["a", "b", "c"],
  printTags() {
    this.tags.forEach(function (tag) {
      console.log(tag); // we get   a,b,c
    }, this); // here this keyword helps to point towars user2
  },
};

// above same eg here printTag is method creating a function now this keyword
// points towards window but by putting this in last, now this keyword points towards user2

// 7.
function hii() {
  console.log("hii");
}
new hii(); // As we know when we use new keyword now this function will become constructor function
// and constructor function will always return object and now this keyword will points towards objects

// 8.

const h1 = document.querySelector('h1')

h1.addEventListener('click',function(){
    console.log(this) // here this keyword points towards addEventlistener
    //  But if we use arrow function then this keyword will point towards window
})

// 9.

class User {
    constructor(){
        this.firstName = 'dd'
        console.log(this)
    }
    getUser(){
        console.log(this) 
    }
}