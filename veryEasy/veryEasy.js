let numRng1 = [1, 2, 3, 0];
let numRng2 = [5, 6, 7, 8];

function veryEasy(a, b) {
    return (`${Math.min(...a)} and ${Math.min(...b)} are the minimum values in their arrays.`);
}

console.log(veryEasy(numRng1, numRng2))