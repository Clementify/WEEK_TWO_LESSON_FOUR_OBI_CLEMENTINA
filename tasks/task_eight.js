
//   Use closure
// Create a function that returns another function.
// The inner function should have access to the variables defined in the outer function.
// Call the outer function and store the returned inner function in a variable.
// Call the inner function and observe that it still has access to the outer variables.




  function outerFunction () {
    const outerVariable = 'I am the outer variable from the outer function'
    function innerFunction () {
      console.log(`${outerVariable} currently in the inner function`)
    }
    return innerFunction
  }
  const closure = outerFunction()
  closure()
