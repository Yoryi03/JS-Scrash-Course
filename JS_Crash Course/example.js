const s = 'Hello World!'

const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const fruit = ['apple', 'orange', 'pears'];

fruit.unshift('mangos');
console.log(fruit)

// for loop 

for (let i = 3; i <= 100; i++) {
  //console.log(`For loop numbers: ${i}`);
}

// while loop

/*let i = 0
while(i <= 50){
  console.log(`While Loop Number: ${i}`);
  i++;
}
*/
// for loop array
for (let i = 0; i < fruit.length; i++) {
  //console.log(fruit[i] );
}

// while loop array

let i = 1
while (i < fruit.length) {
  //console.log(fruit[i]);
  i++;
}
const todos = [
  {
    id: 1,
    text: 'Dentist appt',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Boss meeting',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Take out trash',
    isCompleted: false
  }
];

todos.forEach(function (todo) {
  console.log(todo);

});

const todoText = todos.map(function (todo) {
  return todo.isCompleted;

});


console.log(todoText);


const todoisCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;

});

console.log(todoisCompleted)


const x = 10;
const y = 11;
if (x === 10) {
  console.log('x is 10');
} else if (x <= 10) {
  console.log('x is igual o menor que 10');
}
else {
  console.log('x is no 10');
}


if (x < 10 || y > 10) {
  console.log('x is less than 10 and y is more than 10');
}

if (x <= 10 && y > 10) {
  console.log('x is less or iqual than 10 and y is more than 10');
}


const a = 11

const color = a > 10 ? 'red' : 'blue';

console.log(color);

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}


function addNums(num1, num2) {
  return num1 + num2;

}

console.log(addNums(5, 5));


/* contructor function
function Person(firsName, lastName, datBirt) {
  this.firsName = firsName;
  this.lastName = lastName;
  this.datBirt = datBirt;
}
*/

//Class
class Person {
  constructor(firsName, lastName, datBirt) {
    this.firsName = firsName;
    this.lastName = lastName;
    this.datBirt = datBirt;
  }
  getBirtYear() {
    return this.datBirt();
  }
  getFullName() {
    return `${this.firsName} ${this.lastName}`;
  }
}
// Instantiate a Object

const Person1 = new Person('Yorgi', 'Valdez', '21-7-1994');
const Person2 = new Person('Joy', 'De la Rosa', '2-5-1984');
const Person3 = new Person('Rafael', 'Guerrero', '21-1-2000');


console.log(Person2.getFullName());
