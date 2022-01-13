function yearCycle() {
    let [month, calNum] = [["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]];

    if (document.getElementById("calPos").value == 1) {
        alert(`Month No.${calNum[0]}, ${month[0]}`)
    } else  if (document.getElementById("calPos").value == 2 ) {
        alert(`Month No.${calNum[1]}, ${month[1]}`)
    } else  if (document.getElementById("calPos").value == 3 ) {
        alert(`Month No.${calNum[2]}, ${month[2]}`)
    } else  if (document.getElementById("calPos").value == 4) {
        alert(`Month No.${calNum[3]}, ${month[3]}`)
    } else  if (document.getElementById("calPos").value == 5 ) {
        alert(`Month No.${calNum[4]}, ${month[4]}`)
    } else  if (document.getElementById("calPos").value == 6 ) {
        alert(`Month No.${calNum[5]}, ${month[5]}`)
    } else  if (document.getElementById("calPos").value == 7 ) {
        alert(`Month No.${calNum[6]}, ${month[6]}`)
    } else  if (document.getElementById("calPos").value == 8 ) {
        alert(`Month No.${calNum[7]}, ${month[7]}`)
    } else  if (document.getElementById("calPos").value == 9 ) {
        alert(`Month No.${calNum[8]}, ${month[8]}`)
    } else  if (document.getElementById("calPos").value == 10 ) {
        alert(`Month No.${calNum[9]}, ${month[9]}`)
    } else  if (document.getElementById("calPos").value == 11 ) {
        alert(`Month No.${calNum[10]}, ${month[10]}`)
    } else  if (document.getElementById("calPos").value == 12) {
        alert(`Month No.${calNum[11]}, ${month[11]}`)
    } else {
        alert("Bruh, there are only 12 months in a) year... so pick a number between 1 and 12!")
    }
    
}