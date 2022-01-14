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

