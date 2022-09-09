export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi(message) {
    console.info(
      `Hello ${message}, my name is ${this.name} dan berumur ${this.age}`
    );
  }
}
