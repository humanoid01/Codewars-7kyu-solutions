/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/
function getDivisorsCnt(n) {
  let count = 0
  let original = n
  while (n > 0) {
    if (original % n === 0) {
      count++
    }
    n--
  }
  return count
}
