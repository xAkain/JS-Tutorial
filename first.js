console.log("Arshaan Ahmad")
console.log("Yo gurt")
console.log("No more brainrot")
fullname = "Tony Stark";
Fullname = "Tony Stark";
{age=25;
    console.log("age");
}
{var age = 26;
    console.log(age); 
}/* can be redeclared and can be updated global variable  */
{let age = 27;
 console.log(age) ;
} /* cannot be re declared but can be updated */ 
{const age = 28;
    console.log(age) ;
 } /* cannot be re declared nor can be updated  */
console.log(fullname);
console.log(Fullname);
console.log(age);
x = null ;
y = undefined ;
isCamel = "Camel case"
const student = {
    fullName: "Arshaan Ahmad",
    age: 19,
    cgpa:8.0 ,
    isPass: true,
}
const object = {
    fullName: "Pen",
    stars: 5,
    mrp: $275 ,
    off: 5 ,
    dealofday: true ,

}
console.log(student.age)
console.log(student["fullName"])
student.age = student.age + 1;
console.log(student.age)

//Arithmetic Operations
let a= 2;
let b = 5;
console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a x b =", a*b);
console.log("a / b =", a/b);
console.log("a % b =", a%b); //remainder
console.log("a ** b =", a**b); //a to the power b
//unary operators
a++;
b--;
console.log("a =", a);
console.log("b =", b);

//Assignment Operators
a += 4; // a= a+4
a -= 5;
a *= 5;
a **= 5;
a /= 5;

console.log("5=2", 5==2);
console.log("5 not= 2", 5!=2);
console.log("5 not= 2", 5!="2");
console.log("5 === 2", 5==="5"); //also checks type 

//  Logical Operators
let c = 6;
let d = 5;
let cond1 =  c>d ;
let cond2 =  c===6 ;
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond3 || cond4 =", c > d || c == 5);

let voteAge = 19;
if(voteAge>=18) {
    console.log("You can vote");
    
} else if(voteAge > 60){
    console.log("You are senior citizen");
} else {
    console.log("You cannot vote");
}


/* if(voteAge<18) {
    console.log("You cannot vote");

} */
let mode = dark;
mode==dark ? console.log("color = black") : console.log("color = light");

let pName = prompt("Hello!");
console.log(pName);
let num = prompt("Enter a number");

if  (num % 5 === 0) {
    console.log(num , "is a multiple of 5");

}else {
    console.log(num , "is NOT a multiple of 5");

}

let score = prompt("Enter your score!");

if (score >=90 && score <=100){
    console.log("Your grade is A");
} else if (score >=70 && score <=89){
    console.log("Your grade is B");
} else if (score >=60 && score <=69){
    console.log("Your grade is C");
} else if (score >=50 && score <=59){
    console.log("Your grade is D");
} else  {
    console.log("Your grade is F");
}