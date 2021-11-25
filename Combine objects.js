/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/
function combine() {
  let comboObj = {}
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      if (!comboObj[key]) {
        comboObj[key] = arguments[i][key]
      } else {
        comboObj[key] += arguments[i][key]
      }
    }
  }
  return comboObj
}
