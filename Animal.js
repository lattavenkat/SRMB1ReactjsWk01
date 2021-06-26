class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}
class ChildAnimal extends Animal {
  constructor(name, height) {
    super(name);
    this.height = height;
  }
  run() {
    console.log(`${this.name} is Running`);
  }
}

let child = new ChildAnimal("Jack", 155);
child.eat();
child.run();
child.sleep();
