
//   Use default parameter values
// Modify the greet function to have a default parameter value of "Guest" for the name.
// If no argument is passed when calling the function, it should use the default value.
// Call the function both with and without passing a name argument.

function greet (name = 'Guest') {
    console.log(`Goodevening  ${name}, How are you?`)
  }
  
  greet()
  greet('Sarah')