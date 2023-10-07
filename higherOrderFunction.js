
//Ex5
// function powerOfTwoFor(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(Math.pow(2, arr[i]));
//     }
//     return result;
// }

// function powerOfTwoForEach(arr) {
//     const result = [];
//     arr.forEach(function (num) {
//         result.push(Math.pow(2, num));
//     });
//     return result;
// }

// function powerOfTwoMap(arr) {
//     return arr.map(function (num) {
//         return Math.pow(2, num);
//     });
// }

// const inputArray = [1, 2, 3];
// console.log(powerOfTwoFor(inputArray));    // [2, 4, 8]
// console.log(powerOfTwoForEach(inputArray)); // [2, 4, 8]
// console.log(powerOfTwoMap(inputArray));    // [2, 4, 8]


//Ex6
// function evenOddArray(arr) {
//     return arr.map(function (num) {
//         if (typeof num !== 'number') {
//             return 'N/A';
//         } else {
//             return num % 2 === 0 ? 'even' : 'odd';
//         }
//     });
// }

// // Example usage
// const inputArray6 = [1, 2, 3, "Rawan"];
// console.log(evenOddArray(inputArray6)); // ['odd', 'even', 'odd', 'N/A']

// //Ex7 
// // function fizzbuzz(arr) {
//     const result = [];
//     arr.forEach(function (num) {
//         if (num % 3 === 0 && num % 5 === 0) {
//             result.push("Fizz Buzz");
//         } else if (num % 3 === 0) {
//             result.push("Fizz");
//         } else if (num % 5 === 0) {
//             result.push("Buzz");
//         } else {
//             result.push(num);
//         }
//     });
//     return result;
// }

// const inputArray7 = [1, 2, 3, 4, 5, 15];
// console.log(fizzbuzz(inputArray7)); // [1, 2, 'Fizz', 4, 'Buzz', 'Fizz Buzz']
