class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  getFullName() {
    this.getBirthYear();
    return this.firstName + " " + this.lastName;
  }
}

class Student extends User {
  // this extends helps us to access the user values in student class
  constructor(firstName, lastName, age, standard) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.standard = standard;
  }

  study() {
    console.log("studying"); // we are putting here one extra method i:e study in student prototype
  }
}
class Employee extends User {
  constructor(firstName, lastName, age, company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.company = company; 
  }
  work() {
    console.log("working");
  }
}

const student1 = new Student("abhi", "ydv", 11, "bca");
const employee = new Employee("deva", "ydv", 22, "google");
