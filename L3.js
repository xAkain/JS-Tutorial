  let sum=0;
let n = prompt("Enter number for addition");
let  count;
for (count=1 ; count<=n ; count++) {
    sum=sum+count ;
}
console.log("sum is ",sum);
console.log("n +1 is ",count);
console.log("loop has ended");

let i =1;
 while(i<=5){
    console.log("Hello World");
    i++;
 }

let j = 0;
 do{
    console.log("Apna College" , j);
    j++;

 } while (j<=10);

 //For in loop 
  let student = {
    name: "Rohan Kumar",
    age: 25,
    cgpa: 7.5,
    isPass: true,
  }

  for (let key in student){
    console.log("Key =", key , "Value" , student[key]);
  }
  

  //Q1
   let a = 0;
for (a=0 ;a<=100 ; a++ ){
        console.log("number is", a);
} 

// Q2 Odd 
 let a=0;
for(a=0 ; a<=100 ; a++){
    if(a%2!=0){
        console.log(a);
    }
} 

 let GameNum = 25;
let guessNum= prompt("Enter your guess");
while(guessNum != GameNum) {
    guessNum = prompt("You guessed wrong enter you guess again")
}
 console.log("Congrats you guessed correctly");
alert("Congrats you guessed correctly");

 let str = "Kingslayer";
console.log(str[5]);
let obj = {
    item:"pen",
    price: 25,
};
let output= `The price of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//Template Literals 
let specialString =`This is a template literal \n${1+2+3}` ;
let specialstring =`This is a template literal \t${1+2+3}` ;
console.log(specialString);
console.log(specialstring.length); 

 let str1 = "Apnacollege";

let str2 = "    Apna    college     JS";

let str3 = "Apnacollege";

let newStr1 = str1.toUpperCase();

console.log(str1);

console.log(newStr1);

console.log(str2.trim());

console.log(str3.slice(0,4)); //Apna 

let res = str1.concat(str3);

let res2 = str2 + str3;

console.log(res);

console.log(res2);

console.log(res2.charAt(5));

str1 = str1.replaceAll("a","b");

console.log(str1);

let str = "HEllolololololo";

console.log(str.replace("HE","he"));

console.log(str.replaceAll("lo","he")); 

//Q3
let a = "@" ;
let name= prompt("Enter your name :");
 name = name.replaceAll(" ","");
let strnum = name.length ;
let fullName = a+name+strnum ;
console.log("Fullname is ", fullName);