//Functions : They perform certain task assigned when they are called.

var a =[55,6,32,98,35,89];//sum of all values in an array
function talkies(a){
    var sum =0                           //syntax
for(var i=0; i < a.length; i++){         //function functionname(parameter)(code)}
     sum += a[i];
}
return sum;
}
console.log(talkies(a));
console.log(a);

function anu(a){//returning even numbers in an array
    var even =[];
    for(var i=0;i<a.length;i++){
        if(a[i]%2==0){
            even.push(a[i]);
        }
    }
    return even;
}
console.log(anu(a));

//Ananymous funcion
var sum = function(a,b){//addition of numbers
    var c = a+b;
   return c;
}
console.log(sum(89,89));

var a =["fhf","fhgfgh","cvdf","xsdth","jghng","weasf"];
//var ac = +a;
var sum= function(){
    var b = a.sort();
    return b;
}
console.log(sum(a));
console.log(typeof(a))

//Arrow function
var a = [56,89,654,654,54,84,654,64,5,46,4,654,6,54,54]
var b = (a)=>{
    return a.length;
}
console.log(b(a));//length of an array
var d = b(a)+1
console.log(d);

var e = (a1)=>{
return a.reverse()}
console.log(e(a));

//Define an arrow function divideByTwo which accepts a number and returns that number divided by 2.

var a = (num) => {
   console.log(num/2);
}
a(4);
