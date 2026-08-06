function myFunction(){
    console.log("Hello World");
    console.log("We are learning JS:");
}

function myFunction2(msg ){
    console.log("Hello World");
    console.log("We are learning :", msg);
}

function sum(x , y ){
    //LOCAL VARIABLES --> SCOPE X AND Y ARE NOT DEFINED OUTSIDE funcn para have block scope 
    console.log("SUM ");
    return console.log(x+y);
    console.log("WILL NOT return ");
}

    const minus = (x , y) => {
    console.log("The substraction is", x-y);
}


 myFunction();

 myFunction2("Javascript");

 sum(523 , 6890) ;
  

/*  function vowels(word){
    let vcount = 0;
    word = word.toLowerCase();
     for(let i = 0 ; i<word.length ; i++){
       if (word[i]==="a" || word[i]==="e" || word[i]==="i" || word[i]==="o" || word[i]==="u"){

           vcount++ ; 
       }
    }
    return console.log("Number of vowels in word is",vcount) ;
 }  */

 const vowels = (word) =>{
    let vcount = 0;
    word = word.toLowerCase();
     for(const char of word){
       if (char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){

           vcount++ ; 
       }
    }
    return console.log("Number of vowels in word is",vcount) ;

 }

 vowels("Educational");
 vowels("Arshaan");

 let arr = [12, 34, 56, 35 , 45];
 arr.forEach(function printVal(val){
    console.log(val);
 });

 let arr2 = ["Delhi", "Mumbai", "Chennai"];

 arr2.forEach((val , idx , arr2) => {
    console.log(val.toUpperCase());
 });

 // Q3

 let nums = [1 , 2 ,3 ,4, 5 ,6 ,7];
 nums.forEach((num) =>{
    console.log(num*num);

 });

 let newArr = nums.map((num) =>{
     return num*num ;
    });
    console.log(newArr);
 let newArr2 = nums.filter((val)=>{
    return val % 2 === 0;
 })