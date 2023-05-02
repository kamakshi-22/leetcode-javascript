/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length==0){
        return null;
    }
    const mid = Math.floor(nums.length/2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0,mid));
    root.right = sortedArrayToBST(nums.slice(mid+1));
    return root;
};

/* A height-balanced binary tree can have any number of children, but the height of the left and right subtrees must not differ by more than one level. */

/* TreeNode is a constructor function in JavaScript which creates a new node for a binary tree. 

Each node in a binary tree has a val property which holds the node's value, and left and right properties which hold references to the node's left and right child nodes, respectively. */

/* 

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node = new TreeNode(10); // creates a node with a value of 10 and null left and right child nodes


 */
