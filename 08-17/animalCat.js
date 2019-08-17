class Animal {
  constructor(name) {
    this.name = name;
    // this.habitat = habitat;
  }
  eat() {
    return this.name + " just ate";
  }
}

const fido = new Animal("Fido");

fido;
fido.eat();

class Cat extends Animal {
  constructor(name, habitat) {
    super(name);
    this.habitat = habitat;
  }

  eat() {
    return this.name + " just ate some fish";
  }
  livesIn() {
    return this.name + " lives in a " + this.habitat;
  }
}

const mortimer = new Cat("Mortimer", "house");
mortimer;
mortimer.eat();
mortimer.habitat;

console.log(fido);
console.log(mortimer);
mortimer.livesIn();
