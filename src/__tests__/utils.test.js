// Your tests here
import isPalindrome from "../utils";

describe("isPalindrome", () => {
    it("returns true for a palindrome word", () => {
      const word = "racecar";
  
      const result = isPalindrome(word);
  
      expect(result).toBe(true);
    });
  
    it("returns false for a non-palindrome word", () => {
      const word = "hello";
  
      const result = isPalindrome(word);
  
      expect(result).toBe(false);
    })
})