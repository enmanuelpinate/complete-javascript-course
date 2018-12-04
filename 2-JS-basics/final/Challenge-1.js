var markMass = 75;
var markHeight = 175;
var johnMass = 80;
var johnHeight = 169;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var markHigherJohn = johnBMI < markBMI;

if (markHigherJohn) {
    console.log('is Mark BMI heights than John: ' + markHigherJohn);
} else {
    console.log('is Mark BMI heights than John: ' + markHigherJohn);
}