/*
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return -1 if the argument is not valid
Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

maxRedigit(123); // returns 321
*/
var maxRedigit = function (num) {
  let descending = []
  let max = 0
  const numbers = ('' + num).split('').map((num) => {
    return parseInt(num, 10)
  })
  if (num < 1 || numbers.join('').length !== 3) {
    return null
  }
  const count = numbers.length
  for (let i = 0; i < count; i++) {
    max = 0
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > max) {
        max = numbers[j]
      }
    }
    descending.push(max)
    numbers.splice(numbers.indexOf(max), 1)
  }
  return Number(descending.join(''))
}
