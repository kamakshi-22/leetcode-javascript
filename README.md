# data-structures and algorithms

<img src="https://user-images.githubusercontent.com/55135926/235452889-db31d960-dbea-450d-9c2a-cbb303054efb.png" alt="header" width="100%" height="200px">

### Table of Contents

- [Time Complexity](#time-complexity)
- [Arrays](#arrays)
- [Array Traversal](#array-traversal)
- [Strings](#strings)
- [String Conversion](#string-conversion)
- [Binary Search Tree](#binary-search-tree)

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

| Input Size (n)    | Time Complexity                        |
| ----------------- | -------------------------------------- |
| n ≤ 10           | O(1), O(n log n), O(n), O(n^2)         |
| 10 ≤ n ≤ 100    | O(n log n), O(n), O(n^2), O(n^3)       |
| 100 ≤ n ≤ 10^4  | O(n), O(n log n), O(n^2), O(n^3)       |
| 10^4 ≤ n ≤ 10^6 | O(n log n), O(n), O(n log^2 n), O(n^2) |
| 10^6 ≤ n ≤ 10^9 | O(n log n), O(n), O(log n), O(1)       |

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

### **ARRAY TRAVERSAL**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using forEach() method
numbers.forEach((number) => {
  console.log(number);
});

// Using for...of loop
for (const number of numbers) {
  console.log(number);
}

// Using for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using map() method
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [ 2, 4, 6, 8, 10 ]

// Using filter() method
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [ 2, 4 ]

// Using reduce() method 
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // 15

// Using every() method
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // false

// Using some() method
const someEven = numbers.some((number) => number % 2 === 0);
console.log(someEven); // true


```

### **STRINGS**

```js
// Create a string using string literal notation or the `String()` constructor:
const myString = 'Hello, world!';
const newString = new String('Hello, world!');

const index = myString.indexOf('world');
console.log(index); // Output: 7

// Access individual characters of a string using their index:
const secondCharacter = myString[1];
console.log(secondCharacter); // Output: 'e'

// Find the length of a string using the `length` property:
const stringLength = myString.length;

// Extract a substring from a string using `substring()`:
const substring = myString.substring(0, 5); // Output: 'Hello'

// Replace all occurrences of a substring in a string using `replace()`:
const replacedString = myString.replace('world', 'friend'); // Output: 'Hello, friend!'

// Convert a string to lowercase using `toLowerCase()`:
const lowercaseString = myString.toLowerCase(); // Output: 'hello, world!'

// Convert a string to uppercase using `toUpperCase()`:
const uppercaseString = myString.toUpperCase(); // Output: 'HELLO, WORLD!'

// Split a string into an array of substrings using `split()`:
const splitString = myString.split(','); // Output: ['Hello', ' world!']

// Join an array of substrings into a single string using `join()`:
const joinedString = splitString.join(' '); // Output: 'Hello world!'

// Reverse the order of the characters in a string using `reverse()`:
const reversedString = myString.split('').reverse().join(''); // Output: '!dlrow ,olleH'


// Trim leading and trailing whitespace from a string using `trim()`:
const trimmedString = '   Hello, world!   '.trim(); // Output: 'Hello, world!'

```

### **STRING CONVERSION**

```js
// String to Number:
const strNum = '42';
const num = Number(strNum);
console.log(num); // Output: 42

const strInt = '42';
const int = parseInt(strInt);
console.log(int); // Output: 42

const strFloat = '3.14';
const float = parseFloat(strFloat);
console.log(float); // Output: 3.14

const strBigInt = '12345678901234567890';
const bigInt = BigInt(strBigInt);
console.log(bigInt); // Output: 12345678901234567890n

// Number to String:
const numStr = 42;
const str1 = numStr.toString();
console.log(str1); // Output: '42'

const str2 = String(numStr);
console.log(str2); // Output: '42'

const pi = 3.14159;
const strPi = pi.toFixed(2);
console.log(strPi); // Output: '3.14'
```

### **BINARY SEARCH TREE**

* Creating a Binary Search Tree Node

  ```js
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  /* Inserting a node */
  function insert(root, val) {
    if (!root) {
      return new TreeNode(val);
    }

    if (val < root.val) {
      root.left = insert(root.left, val);
    } else {
      root.right = insert(root.right, val);
    }

    return root;
  }

  /* Example */
  const root = new TreeNode(5);
  insert(root, 3);
  insert(root, 8);
  insert(root, 1);
  insert(root, 4);

  // The resulting tree should look like:
  //      5
  //     / \
  //    3   8
  //   / \
  //  1   4


  ```
* Searching for a node

  ```js
  function search(root, val) {
    if (!root || root.val === val) {
      return root;
    }

    if (val < root.val) {
      return search(root.left, val);
    } else {
      return search(root.right, val);
    }
  }

  /* Example */

  const root = new TreeNode(5);
  insert(root, 3);
  insert(root, 8);
  insert(root, 1);
  insert(root, 4);

  const node = search(root, 4); // returns the node with value 4

  ```
* Traversing the Tree

  ```js
  /* In-order Traversal */
  function inOrder(root) {
    if (!root) {
      return;
    }

    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  }

  /* Example */
  const root = new TreeNode(5);
  insert(root, 3);
  insert(root, 8);
  insert(root, 1);
  insert(root, 4);

  inOrder(root); // logs 1, 3, 4, 5, 8


  ```
  ```js
  /* Pre-order Traversal */
  function preOrder(root) {
    if (!root) {
      return;
    }

    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }

  /* Example */
  const root = new TreeNode(5);
  insert(root, 3);
  insert(root, 8);
  insert(root, 1);
  insert(root, 4);

  preOrder(root); // logs 5, 3, 1, 4, 8

  ```
  ```js
  /* Post Order Traversal */
  function postOrder(root) {
    if (!root) {
      return;
    }

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
  }

  /* Example */

  const root = new TreeNode(5);
  insert(root, 3);
  insert(root, 8);
  insert(root, 1);
  insert(root, 4);

  postOrder(root); // logs 1, 4, 3, 8, 5

  ```
* Deletion

  ```js
  /**
   * Deletes a value from the binary search tree
   * @param {TreeNode} root - Root of the binary search tree
   * @param {number} val - Value to be deleted
   * @return {TreeNode} - Root of the modified binary search tree
   */
  function deleteNode(root, val) {
    if (!root) return root;
    if (val < root.val) root.left = deleteNode(root.left, val);
    else if (val > root.val) root.right = deleteNode(root.right, val);
    else {
      if (!root.left && !root.right) root = null;
      else if (!root.left || !root.right) root = root.left || root.right;
      else {
        let temp = root.right;
        while (temp.left) temp = temp.left;
        root.val = temp.val;
        root.right = deleteNode(root.right, temp.val);
      }
    }
    return root;
  }

  /* Example */
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(6);
  console.log(deleteNode(root, 6)); // Output: TreeNode{val: 4, left: TreeNode{val: 2, left: null, right: null}, right: TreeNode{val: 7, left:

  ```
