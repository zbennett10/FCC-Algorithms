function chunkArrayInGroups(arr, size) {
  var output = [];
  while(arr.length > 0) {
    output.push(arr.splice(0,size));
  }
  return output;
}
