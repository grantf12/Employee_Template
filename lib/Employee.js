// TODO: Write code to define and export the Employee class
// Write starting code that will ask for info and then ask for occupation, occupation will then run another file and bring info with it
const inquirer = require("inquirer")

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;  
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}
module.exports = Employee;