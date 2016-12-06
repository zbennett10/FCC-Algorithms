function confirmEnding(str, target) {
   str = str.substr([str.length - target.length]);
   if (target === str) return true;
   return false; 
}
