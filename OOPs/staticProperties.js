class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static hi = "hello" // this property is only accessible by CreatUser
  static{
    // this is static block, any code in this will run without even call/invoke
    // console.log("static");
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  getFullName() {
    this.getBirthYear(); // we can use here
    return this.firstName + " " + this.lastName;
  }
}

CreateUser.myName = 'deva' // this is also a static just like above in code
// CreateUser.hi -> "hello" we can access it like this