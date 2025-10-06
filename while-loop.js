let numbers = [4, 5, 7, 9, 39, 65, 78, 88,];

let total = 0;
let largest = numbers[0];
let i = 0;


while (i < numbers.length){
  total += numbers[i];
  if(numbers[i] > largest) {
    largest = numbers[i];
  }
  i++;
}


let average = total / numbers.length;



console.log("Numbers:", numbers);
console.log("Total:", total);
console.log("Average:", average);
console.log("Largest Number:", largest);
