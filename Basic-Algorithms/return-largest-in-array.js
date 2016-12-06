function largestOfFour(arr) {
  var output = [];
  for (var i =0; i < arr.length; i++) {
    output.push(Math.max.apply(null,arr[i]));
  }
  return output;
}
