module.exports = function solveEquation(equation) 
{
  // your implementation
//var testeq="-464 * x^2 + 2224458688 * x - 998668448399424";
var testeq=equation;
testeq=testeq.replace(/\s+/g,"");
testeq=testeq.replace(/\*x\^2/," ");
testeq=testeq.replace(/\*x/," ");
//console.log(testeq);
var a=parseInt(testeq);
//console.log(" ");

var arr=testeq.split(" ");
//console.log (arr);
var a=parseInt(arr[0]);
var b=parseInt(arr[1]);
var c=parseInt(arr[2]);
//console.log(" ");
//console.log(a,b,c);
var D=b*b-4*a*c;
var x=[];
x[0]=Math.round((-b+Math.sqrt(D))/(2*a));
x[1]=Math.round((-b-Math.sqrt(D))/(2*a));
if (x[0]>x[1])
{
m=x[0];
x[0]=x[1];
x[1]=m;
}
 
//console.log(x);
return x;

}
