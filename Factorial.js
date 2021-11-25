/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/
function factorial(n) {
  let answer = 1
  if (n <= 1) {
    return 1
  }
  while (n > 1) {
    answer = answer * n

    n--
  }
  return answer
}
