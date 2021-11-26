/*
Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

Write a function that takes an array of integers as an argument and returns the median of those integers.

Notes:

The sorting step is vital.
Input arrays are non-empty.
Examples
Median of [33,99,100,30,29,50] is 41.5.
Median of [3,2,1] is 2.
*/
function median(array) {
  let left = array.length / 2 - 1
  let right = array.length / 2
  array.sort((a, b) => a - b)
  if (array.length % 2 === 0) {
    return (array[left] + array[right]) / 2
  } else {
    return array[Math.floor(array.length / 2)]
  }
}
