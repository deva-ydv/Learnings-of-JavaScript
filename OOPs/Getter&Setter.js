const user = {
    firstName: 'deva',
    lastName: "ydv",
    fullName (){
        return `${user.firstName}${user.lastName}`
    }
}

console.log(user.firstName + " " + user.lastName)
console.log(`${user.firstName}${user.lastName}`)


// above both things are same but
// we can do this using function and this keyword 
// advantage of using this keyword is now this keyword
// point to the user class only

console.log(user.fullName())

user.fullName = "akas kumar"; // but there is one problem if we do 
// like this then this fullName property gets add on the user and if we
// call fullName then it shows an error

// Solution of this problem is get keyword below code

const user = {
    firstName: 'Nidhi',
    lastName: "Dhage",
    get fullName (){
        return `${this.firstName}${" "}${this.lastName}`
    },
    set fullName(value){
        const splitted = value.split(' ')
        console.log(splitted)// we can also desturcture it
    }
}

// user.fullName -> deva ydv    we can call it like this and this one for get
// user.fullName = "Nidhi Dhage" -> we can call it like this and this one is for set it gives us in array form


