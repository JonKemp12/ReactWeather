// Example of arror functions:

function add (a,b) {
  return a+b;
}

//addExpression
var addExpression = (a,b) => a+b;
console.log('addExpression:', addExpression(2,3));


//addStatement
var addStatement = (a,b) => {
  return a+b;
}

console.log('addStatement:', addStatement(3,4));
