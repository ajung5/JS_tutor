export default class {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(message){
        console.info(`Hi ${message}, my name is ${this.name} and im ${this.age} years old`);
    }
}