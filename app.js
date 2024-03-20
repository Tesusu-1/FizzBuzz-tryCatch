'use strict';
for (let i = 0; i < 100; i++) {
  if (i % 15 === 0) {
    try {
      throw new Error();
      console.log('FizzBuzz');
    } catch (err) {
      console.log(err);
    }
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
