// FizzBuzz implementation
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';
    
    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    
    // If divisible by neither 3 nor 5, print the number
    if (output === '') {
      output = i;
    }
    
    console.log(output);
  }
}

// Execute fizzbuzz for numbers 1 to 15
fizzbuzz(15);