
//   Understand function scope
// Create a variable inside a function and try to access it outside the function.
// Declare a variable outside a function and try to access it inside the function.

const bio = 'Global scope'

function scope () {
  
  const age = `${bio} in a function`
  console.log(age)
  const name = 'Local scope'
  return local
}

scope() // Outputs 'Global scope in a function'
console.log(local) // Shows ReferenceError, local is not defined