x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
   // a=8, b=9, c=10
  var x = 10;
  console.log(x);  // 10
  console.log(a);  // 8
  var f = function(a, b, c) {
     //// a=8, b=9, c=10
    b = a;  // b=8
    console.log(b);  //8
    b = c;    //b=10
    var x = 5;
  }
  f(a,b,c); 
  console.log(b);  //9 
}
c(8,9,10);        // 10  8  8  9  
console.log(b);  // 10
console.log(x);   // 1