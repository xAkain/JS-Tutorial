console.log("hello");
console.dir(document);
console.dir(document.body);
/* document.body.childNodes[3].innerText =  "abcd"; */
/* document.getElementById("Heading");
console.log(Heading); */
let Headings = document.getElementsByClassName("Headingclass");
console.dir(Headings);
console.log(Headings);
let firstEl = document.querySelector(".Headingclass");
console.dir(firstEl);
let Allel = document.querySelectorAll(".Headingclass");
console.dir(Allel); // also document.querySelector(#myid)
let div = document.querySelector("div");
console.dir(div); // div.innerText div.innerHTML
//heading.textContent
//heading.tagname  
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "From Apna College students" ;

let divs = document.querySelectorAll(".Box");
let idx=1;
for(div of divs){
    div.innerText = `Unique value ${idx}`;
    idx++;
}
