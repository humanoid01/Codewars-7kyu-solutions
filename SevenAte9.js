/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/
function sevenAte9(str) {
  const newArr = str.split('')
  const arr1 = newArr
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i - 1] === '7' && newArr[i + 1] === '7' && newArr[i] === '9') {
      newArr[i] = ''
    }
  }
  return newArr.join('')
}
