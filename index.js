function calculateTax(amount) {
  return amount * 10/100; 
}

function convertToUpperCase(text) {
  return String(text).toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

function isPalindrome(word) {
  const normalized = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};

