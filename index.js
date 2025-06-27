function hasTargetSum(array, target) {
  // Create a set to store numbers we've already seen
  const seen = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true; // Found two numbers that sum to target
    }
    seen.add(num); // Store the current number for future checks
  }

  return false; // No valid pair found
}

/* 
  Big O time complexity: O(n)
  - We loop through the array only once.
  - Set operations (add, has) are O(1).
*/

/* 
  Pseudocode:
  - Create a Set to track seen numbers.
  - For each number in the array:
    - Calculate its complement (target - number).
    - If the complement is in the Set, return true.
    - Otherwise, add the current number to the Set.
  - If loop completes without finding a pair, return false.
*/

/*
  Explanation:
  The function checks if any two numbers in the array add up to the target.
  It does this efficiently by storing numbers as we go and checking if
  the current number's complement (target - num) has already been seen.
  If so, we’ve found a pair and return true.
  If no such pair exists, return false at the end.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  // Extra test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
