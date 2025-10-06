let numbers = [3, 5, 23, 56, 67, 99];

let total = 0;

let largest = numbers[0];

for (let i = 0; i< numbers.length; i++) {
  total += numbers[i];
  if(numbers[i] > largest) {
    largest = numbers[i];
  }
}


let average = total / numbers.length;



console.log("Numbers:",numbers);
console.log("Total:", total);
console.log("Average:", average);
console.log("Largest Number:", largest);



