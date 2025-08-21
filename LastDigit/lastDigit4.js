function lastDigit(n) {
  var l = n % 10;
  return l;
}
var n = 456;
console.log("Number: ", n);
var l = lastDigit(n);
console.log("last Digit: ", l);
