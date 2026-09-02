let div = document.querySelector("div");
console.log(div);
div.style.backgroundColor ="green";
div.style.backgroundColor ="purple";
div.style.fontSize ="40px";
div.innerText ="Helloooo!";
let id = div.getAttribute("id");
console.log(id);

let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "Click me";
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi I am NEW!</i>";
document.querySelector("body").prepend(newHeading);
let para = document.querySelector("p");
para.remove();
/* newHeading.remove(); */

let Bttn = document.createElement("button");
Bttn.innerText = "Click me";
Bttn.style.backgroundColor = "red";
Bttn.style.color = "white";
Bttn.append("body");

let para1 = document.querySelector("p");
para1.classList.add("newClass");