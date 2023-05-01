# data-structures and algorithms
<img src="https://user-images.githubusercontent.com/55135926/235452889-db31d960-dbea-450d-9c2a-cbb303054efb.png" alt="header" width="100%" height="200px">


### Table of Contents

- [Time Complexity](#time-complexity)
- [Arrays](#arrays)

### **TIME COMPLEXITY**
- Time complexity refers to the amount of time an algorithm takes to solve a problem as the input size increases. 
- It is usually expressed in terms of the "Big O" notation.
- The Big O notation is a mathematical representation that indicates the upper bound of an algorithm's time complexity as the input size approaches infinity.

```javascript
//example. Time Complexity O(n)
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

Rough guide to the time complexity of common algorithms based on the input size:

| Input Size (n)   | Time Complexity           |
|------------------|---------------------------|
| n ≤ 10           | O(1), O(n log n), O(n), O(n^2) |
| 10 ≤ n ≤ 100     | O(n log n), O(n), O(n^2), O(n^3) |
| 100 ≤ n ≤ 10^4   | O(n), O(n log n), O(n^2), O(n^3) |
| 10^4 ≤ n ≤ 10^6  | O(n log n), O(n), O(n log^2 n), O(n^2) |
| 10^6 ≤ n ≤ 10^9  | O(n log n), O(n), O(log n), O(1) | 

### **ARRAYS**

```javascript
// Create an array using array literal notation or the `Array()` constructor:
const myArray = [1, 2, 3];
const newArray = new Array(1, 2, 3);

// Access individual elements of an array using their index:
const secondElement = myArray[1];
console.log(secondElement); // Output: 2

// Add elements to the end of an array using `push()`:
myArray.push(4, 5);

// Remove the last element of an array using `pop()`:
const lastElement = myArray.pop();

// Add elements to the beginning of an array using `unshift()`:
myArray.unshift(0);

// Remove the first element of an array using `shift()`:
const firstElement = myArray.shift();

// Concatenate two or more arrays using `concat()`:
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = array1.concat(array2);

// Slice a portion of an array using `slice()`:
const slicedArray = concatenatedArray.slice(1, 3);

// Sort an array using `sort()`:
const unsortedArray = [3, 1, 4, 1, 5, 9];
const sortedArray = unsortedArray.sort();

// Reverse the order of an array using `reverse()`:
const reversedArray = sortedArray.reverse();
```


