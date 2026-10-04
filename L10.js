const student = {
    fullName : "Arshaan Ahmad",
    marks: 94.4;
    printMarks: function(){
        console.log("marks =", this.marks);
    }
}

const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
      calcTax() {
        console.log("Tax rate is 20%");
    },
}
const karanArjun2 = {
    salary: 50000,
}
const karanArjun3 = {
    salary: 50000,
}
const karanArjun4 = {
    salary: 50000,
}

karanArjun.__proto__ = employee;
/* karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee; */

class Toyotacar {
    constructor(brand , mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("Car is started");
    }
    stop(){
        console.log("Car is stopped");
    }
    
}

let fortuner = new Toyotacar("fortuner", 12);
console.log(fortuner);
/* fortuner.setBrand("fortuner"); */

let lexus = new Toyotacar("lexus" , 10);
console.log(lexus);
