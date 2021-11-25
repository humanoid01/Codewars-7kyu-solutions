/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/
function generateShape(integer) {
  var sum = ''
  var answer = ''
  for (let i = 0; i < integer; i++) {
    sum += '+'
  }
  answer = sum
  for (let i = 0; i < integer - 1; i++) {
    answer += '\n' + sum
  }
  return answer
}
function generateShape(n) {
  return ('+'.repeat(n) + '\n').repeat(n).trim()
}
