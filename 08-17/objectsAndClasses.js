// const userOne = {
//   name: 'Jason',
//   age: 22,
//   occupation: 'Tutor',
//   sayHello() {
//     return 'Hello!'
//   },
//   greet() {
//     return 'Hi, my name is Jason'
//   }
// }

// userOne // { name: 'Jason', age: 22, occupation: 'Tutor' }
// userOne.name // 'Jason'
// userOne.age // 22
// userOne.sayHello // function sayHello
// userOne.sayHello() // 'Hello!'
// userOne.greet()

// const userTwo = {
//   name: 'Janet',
//   age: 32,
//   occupation: 'Actress',
//   sayHello() {
//     return 'Hello!'
//   },
//   greet() {
//     return 'Hi, my name is Janet'
//   }
// }

// userTwo
// userTwo.greet()
// userTwo.work = 'QCC'
// userTwo

class User {
  constructor(nameArg, ageArg, occupationArg) {
    this.name = nameArg;
    this.age = ageArg;
    this.occupation = occupationArg;
    // this.city = 'New York'
  }
  sayHello() {
    return "Hello!";
  }
  greet() {
    return "My name is " + this.name;
  }
}

const userOne = new User("Jason", 22, "tutor");
const userTwo = new User("Janet", 32, "actress");

const userThree = new User("Billy", 23, "student");
// const userThree = User('Billy', 23, 'student')
// TypeError: Cannot call a class as a function

userThree;
userThree.sayHello();
userThree.greet;
userThree.greet();
// userThree.city

// console.log(userOne, userTwo, userThree)

class Student extends User {
  constructor(name, age, school) {
    super(name, age, "student");
    this.school = school;
    this.courses = [];
  }
  listCourses() {
    return this.courses;
  }
  addCourse(course) {
    this.courses.push(course);
    return "Added course successfully";
  }
  printCourses() {
    this.courses.map(course => {
      console.log(course);
    });
  }
}

const kevin = new Student("Kevin", 26, "QCC");
kevin;

kevin.courses;
kevin.listCourses();
kevin.addCourse("HTML");
kevin.listCourses();
kevin.addCourse("JavaScript");
kevin.addCourse("Dance");

// kevin.printCourses()

const newCourses = ["React", "Math", "Swimming"];
newCourses.map(course => {
  kevin.addCourse(course);
});

kevin.printCourses();
