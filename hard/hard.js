let height = [9, 10];
let mass = [8, 45];

function bmi() {
    tomBmi = mass[0] / Math.pow(height[0], 2);
    jerryBmi = mass[1] / Math.pow(height[0], 2);
    
    return (`Is Tom's BMI(${tomBmi}) higher than Jerry's BMI(${jerryBmi})? ${Boolean(tomBmi > jerryBmi)}`);
}

console.log(bmi())

function bmi2 () {
    a = Number(document.querySelector('#tomM').value) / Math.pow(Number(document.querySelector('#tomH').value), 2) ;
    b = Number(document.querySelector('#jerryM').value) /Math.pow(Number(document.querySelector('#jerryM').value), 2)
    
    console.log(`Is Tom's BMI(${a}) higher than Jerry's BMI(${b})? ${Boolean(a > b)}`);
    
}

let tom = [Number(document.querySelector('#tomMArg').value), Number(document.querySelector('#tomHArg').value)];
let jerry = [Number(document.querySelector('#jerryMArg').value), Number(document.querySelector('#jerryHArg').value)];

function bmi3 (a, b) {
    let bmi1 = a[0] / Math.pow(a[1], 2);
    let bmi2 = b[0] / Math.pow(b[1], 2);

    return `Is Tom's BMI(${bmi1}) higher than Jerry's BMI(${bmi2})? ${Boolean(bmi1 > bmi2)}`
}
console.log(bmi3 (tom, jerry))
