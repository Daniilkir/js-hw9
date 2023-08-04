// 1
let numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i += 1) {
  if (i === 1) {
    numbers[i] = 10;
  }
}
console.log(numbers);

// 2
let strings = ['Рядок 1', 'Рядок 2', 'Рядок 3'];
let newstring = 'Рядок 4';

for (let i = strings.length; i < strings.length + 1; i += 1) {
  strings.push(newstring);
}
console.log(strings);

// 3
let number = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < number.length; i += 1) {
  sum += number[i];
}
console.log(sum);

// 4
const numbersarray = [10, 20, 30, 40, 50];
for (let i = 0; i < numbersarray.length; i++) {
  console.log(numbersarray[i]);
}

// 5
const stringsarray = ["Hello", "Sup", "Good", "Morning", "Even"];
for (let i = 0; i < stringsarray.length; i++) {
  if (stringsarray[i].length > 5) {
    console.log(stringsarray[i]);
  }
}

// 6
const numberarray = [12, 34, 7, 56, 23, 9, 45, 87, 2, 19];
let maxNumber = numberarray[0];

for (let i = 1; i < numberarray.length; i++) {
  if (numberarray[i] > maxNumber) {
    maxNumber = numberarray[i];
  }
}
console.log(maxNumber);

// 7
const somenumb = [12, 34, 7, 56, 23, 9, 45, 88, 2, 19];
for (let i = 0; i < somenumb.length; i++) {
  if (somenumb[i] % 2 === 0) {
    console.log(somenumb[i]);
  }
}
