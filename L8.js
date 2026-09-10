/* events in js */
/* let btn1 = document.querySelector("#btn1");

btn1.addEventListener('Click', () => {
    console.log('Button1 was clicked');
});

btn1.addEventListener('Click', (evt) => {
    console.log('Button1 was clicked handler2');
    console.log(evt.type);
});

const handler3 = () => {
    console.log("Button1 was clicked handler3");

};

btn1.addEventListener('Click', handler3);

btn1.removeEventListener("click", handler3); */

/*  btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
   
}; */

/*  btn1.onclick = () => {
    console.log("btn was clicked!")
    let a = 25;
    a++;
    console.log(a); 
}; */


/* let box = document.querySelector("#box");
box.onmouseover = () => {
    console.log("You are inside div!");
};
 */
let Cmode = document.querySelector("#mode");
let Currmode = "light";
let body = document.querySelector("body");

Cmode.addEventListener("click",() =>{
    if (Currmode === "light"){
        body.classList.remove("light");
        body.classList.add("dark");
        Currmode = "dark";
    } else {
        Currmode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log(Currmode);
});
