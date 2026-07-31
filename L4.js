 let marks = [95,93,94,87,67,45];
console.log(marks);

console.log(marks.length);
console.log(marks.toString());

marks[0] = 69 ;
marks.push(80,67,23);
let deletedItem = marks.pop();
console.log(deletedItem);


console.log(marks);

//for loop
 for (let idx=0; idx<marks.length ;idx++){
    console.log(marks[idx]);
} 

//for of loop
for (let mark of marks ){
    console.log(mark);
}
 
let sum=0;

let arr = [85, 97 , 44 , 37 , 76 , 60]
 for(let i =0; i<arr.length; i++){
    sum= sum+arr[i] ;
} 

let average= sum/arr.length ;

 console.log(sum);

 console.log(`Average marks of class is ${average}`);

let store=[250,645,300,900,50];

for (let j=0; j<store.length;j++) {
    let off = (9/10)*store[j];
    store[j] = off;
}
console.log("items in sale are now ", store); 


let store2=[250,645,300,900,50];
let g=0;
for (let val of store2){
    let offer = val/10;
    store2[g] -= offer ;
    console.log(store2[g]);
    g++;

}

let marvel_heroes = ["Ironman", "Spiderman" , "Thor"];
let dc_heroes = ["batman", "Superman" , "wonderwoman"];

let heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);
console.log(heroes.shift()); //remove first
console.log(heroes.slice(1,5)); 
console.log(heroes.splice(1,1,101)); //start at , remove , add 

//  Q1
let companies = ["Bloomberg", "Uber" , "Microsoft","Google","IBM", "Netflix"]
companies.shift();
companies.splice(0,1,"Ola");
companies.push("Amazon");
console.log(companies);