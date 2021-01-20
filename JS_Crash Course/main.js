const s = 'Hello World!'

const numbers = new Array(1,2,3,4,5,6,7,8,9,10);
const fruit = ['apple','orange','pears'];

fruit.unshift('mangos');
console.log(fruit)


const persons = {
  firtsname: 'Joy',
  lastname: 'valdez',
  age: 26,
  hobbies: ['gamin','gym','coding','music'],
  address:{
    street:'calle curazao esquina ramon a castillo',
    city:'santo domingo',
    state:'Santo domingo'
  }
}


console.log 


// for loop 

for(let i = 3; i <= 100; i++) {
  console.log(`For loop numbers: ${i}`);
}

// while loop

/*let i = 0
while(i <= 50){
  console.log(`While Loop Number: ${i}`);
  i++;
}
*/
// for loop array
for(let i = 0; i < fruit.length; i++) {
  console.log(fruit[i] );
}

// while loop array

let i = 1
while(i < fruit.length){
  console.log(fruit[i]);
  i++;
}
