var name = "Rick";
console.log("Hello, " + name);

var a = 30389;
console.log(a, typeof(a));

a = "" + a;
console.log(a, typeof(a));

a = "24px";
console.log(parseInt(a) + 10); /* changes string 24 to int 24, then adds 10 to it. */
console.log(a + 10); /* appends the integer 10 to the string "24px" */