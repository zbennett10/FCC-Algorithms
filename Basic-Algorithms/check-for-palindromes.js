function palindrome(str) {
  if(str === "" || str === null || typeof str !== 'string') return "Not valid input.";
  
  return str.replace(/[\W_]/g, '').toLowerCase() ===
    str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  
}

palindrome("eye");
