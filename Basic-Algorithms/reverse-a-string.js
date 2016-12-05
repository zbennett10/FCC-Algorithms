function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');

ES6----------------------------------------

const reverseString = str => str.split('').reverse().join('');
reverseString('hello');
