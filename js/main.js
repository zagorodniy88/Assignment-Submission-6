// Used ternary operation
let age = document.getElementById("age");
document.write(age.value);
let btn = document.getElementById("btn").onclick = function () {
    age.value < 18 ? alert("Access is denied!") : alert("access is allowed!");
}

// Created a constructor 
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

let Alex = new Vehicle ("Dodge", "Viper", 2020, "Red");
let Kris = new Vehicle("Jeep", "Trail Hawk", 2019, "White");

document.getElementById("obj").onclick = function () {
    document.getElementById("p").innerHTML=
    "Alex drives a " + Alex.Vehicle_Color + "-colored " + Alex.Vehicle_Model +
    " manufactured in " + Alex.Vehicle_Year;
}


// Nested function
function count_func () {
    document.getElementById("f").innerHTML = isEvenNumber();
        function isEvenNumber () {
            let num = document.getElementById("num").value;
            let res = (num%2==0)?true:false;
            return res;
        }

}