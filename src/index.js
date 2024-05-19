


// const makeCounter = () => {
//     let currentCounter = 0;

//     const getCurrentCount = () => {
//         return currentCounter;
//     }

//     const increaseCount = () => {
//         currentCounter +=1;
//         return currentCounter;
//     }

//     const decreaseCount = () => {
//         currentCounter = currentCounter - 1;
//         return currentCounter;
//     }


//     return { getCurrentCount, increaseCount, decreaseCount };
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();


// // console.log(counter1.getCurrentCount());
// // console.log(counter1.increaseCount());
// // console.log(counter1.decreaseCount());
// // console.log(counter1.getCurrentCount());
// // console.log(counter2.increaseCount());
// // console.log(counter2.increaseCount());
// // console.log(counter2.increaseCount());
// // console.log(counter1.getCurrentCount());


// function show(...args) {
//     console.log('this:', this);
//     console.log('args:', args);
// }

// // show.apply({ name: 'Bob' }, ['here', 'there'])
// const showThis = show.bind({ name: 'Bob' }, 'here', 'there')
// // showThis()

// // const lowerCase = s => s.toLowercase();
// // const addSymbol = s => `${s}`;
// // const reverseString = s => s.split('').reverse().join('');

// // const compose = (...allFunctions) => arg => {
// //     return allFunctions.reduce((prevFunc, currentFunc) => currentFunc(prevFunc), arg);
// // }
// // const procesString = compose(lowerCase, addSymbol, reverseString);
// // procesString('acvfds')

// const multiply = (num1, num2) => {
//     console.log('num1', num1);
//     console.log('num2', num2);
//     return num1 * num2
// };
// const multiply5 = num2 => {
//     return multiply(5, num2)
// };
// const multiply4 = multiply.bind(null, 4)

// // console.log(multiply5(2));
// // console.log((multiply4(3)));


// const multiplyCurried = (num1, num2) => {
//     // console.log(num1);
//     // console.log(num2);
//     if (arguments.length === 2) {
//         return num1 * num2;
//     }

//     return (num3) => multiplyCurried(num1,num3);
// }


// const result = multiplyCurried(3)(5)();
// // console.log(result);

// const cat = [1, 3, 'dog', 'Poly'];
// const isDog = el => el === 'dog';

// // console.log(cat.indexOf(3));
// // console.log(cat.findIndex(el=>el===3));

// // const students = [
// //     { id: 1, name: 'Alice', age: 22 },
// //     { id: 2, name: 'Bob', age: 25 },
// //     { id: 3, name: 'Charlie', age: 20 }
// // ];

// // const namesArray = students.reduce((newStudentsList, element, index, array) => {
// //     return [...newStudentsList, element.name ]
// // }, [])

// // console.log(namesArray);

// // const totalAge = students.reduce((totalNumber, element, index, array )=> {
// //     totalNumber += element.age;
// //     return totalNumber;
// // }, 0);

// // console.log(totalAge);

// // const newArray = students.reduce((newStudentsArray, element, index) => {
// //     newStudentsArray[element.name] = element;
// //     return newStudentsArray;

// // }, {})

// // console.log(newArray);

// const note = {};
// note.name = 'ppp';
// // console.log(note);

// const students = [
//     { id: 1, name: 'Alice', age: 22 },
//     { id: 2, name: 'Bob', age: 25 },
//     { id: 3, name: 'Charlie', age: 20 }
// ];

// // students.sort((a, b) => a.age - b.age);

// // students.sort((a, b) => b.name.localeCompare(a.name))

// // const newS = students.slice(0,1)
// // console.log(newS);


// async function fetchPokemonByID() {
//     return new Promise((resolve, reject) => {
//         return fetch('https://pokeapi.co/api/v2/item/1/?limit=10&offset=10');
//     }).catch(e=>reject(e))
//     }



// fetchPokemonByID()

// async function newFestch() {
//     for (let i = 0; i <= 10; i += 1){

//     }
// }

// // console.log(Array.from('Bob'));

// // console.log([].map.call('somesting', (letter) => letter));

// const multiplyN = (num1, num2) => {
//     if (num2) {
//         return num1 * num2;
//     }

//     return (num3) => num1 * num3;

// }

// console.log(multiplyN(2, 3));
// console.log(multiplyN(2)(5));
// const someFunc = multiplyN(2);
// console.log(someFunc(4));

// function isPalindrome(str) {
//     const loweredcaseStr = str.toLowerCase();
//     const reversedStr = loweredcaseStr.split('').join('')
//     return loweredcaseStr === reversedStr;
// }
// console.log(isPalindrome('racecar'))

// # Module 1. Lesson 1. Variables, types and operators

// ## Example 1 - Mathematical operators

// Display the total number of apples and grapes on the screen.The difference between apples and grapes.

// ```js
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)
// ```

// ## Example 2 - Combined operators

// Replace the override expression with the combined operator`+=`.

// ```js
// let students = 100;
// students += 50;
// console.log(students);
// ```

// ## Example 3 - Operators Priority

// Disassemble operators priority in the variable value assignment  instruction
//     `result`.

// ```js
// const result = 108 + 223 - 2 * 5;
// console.log(result);
// ```

// ## Example 4 - Math class

//     Write a script that prints to the console rounded up / down, etc.values
// of variable`value`.Use the methods`Math.floor()`, `Math.ceil()` and
//     `Math.round()`.Check what happens in the console for the values "27.3" and "27.9".

// ```js
// const value = 27.5;
// console.log(Math.round(value))
// ```

// ## Example 5 - Template lines

// Compose a phrase using the template strings `A has B bots in stock`, where A, B -
//     variables inserted into a line.

// ```js
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} in stock`;
// console.log(message)
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 6 - String methods and chaining

// Write a script that calculates a person's body mass index. For this
// you need to divide the weight in kilograms by the square of the person's height in meters.

// Weight and height are stored in the`weight` and `height` variables, but not as numbers, but in
//     as strings(specially for the task).Non - integer numbers can be given as
//         `24.7` or`24,7`, that is, as a separator of the fractional part can be
// comma.

// The body mass index should be rounded to one decimal place;

// ```js
// let weight = '88,3';
// let height = '1.75';

// const weightNum = Number(weight.replace(',', '.'));
// const heightNum = Number(height.replace(',', '.'));
// const squaredHeight = Math.pow(heightNum, 2);


// const bmi = weightNum / squaredHeight;
// console.log(Math.round(bmi));
// console.log(bmi); // 28.8
// ```

// ## Example 7 - Comparison operators and type casting

// What will be the result of the expressions ?

//     ```js
// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// ```

// ## Example 8 - Logical operators

// What will be the result of the expressions ?

//     ```js
// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
// ```

// ## Example 9 - Default value and null merge operator

//  Refactor the code so that the value is assigned to the `value` variable
// variable `incomingValue` if it is not equal to `undefined` or`null`.Otherwise,
//     `defaultValue` must be assigned.Check work
// script for the following values of the `incomingValue` variable: null, undefined, 0,
//     false.Use operator`??`(nullish coalescing operator).

// ```js
// const incomingValue = 5;
// const defaultValue = 10;
// const value = false ?? defaultValue;
// console.log(value);
// ```

// ## Example 10 - The % Operator and String Methods

// Write a script that will convert the value of`totalMinutes`(number of minutes) to
// string in hour and minute format`HH:MM`.

// - 70 will show 01: 10
//     - 450 will show 07: 30
//         - 1441 will show 24:01

//             ```js
// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const doubleDigitHours = String(hours).padStart(2, 0)
// const doubleDigitMinutes = String(minutes).padStart(2, 0)
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`)


// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${ doubleDigitHours }:${ doubleDigitMinutes } `);
// ```

/////////////////////////////////////////////////

// Module 1. Lesson 2. Branching.Cycles
// Example 1 - User Input and Branching
// Using the if..else and prompt constructs, write code that will ask: "What is the official name of JavaScript?".If the user enters ECMAScript, then show an alert with the string "Correct!", otherwise - "Do not know? ECMAScript!"
// const userAnswer = prompt("What is the official name of JavaScript?")
// if (userAnswer === ('ECMAScript')) {
//     alert("Correct!")
// } else {
//     alert("Do not know? ECMAScript!")
// }


// Example 2 - Time display(if...else)
// Write a script to display hours and minutes in the browser console as a string format "14 hours 26 minutes.".If the value of the minutes variable is 0, then output the string "14 o'clock", without minutes.

// const hours = 14;
// const minutes = 26;
// let timestring;
// if (minutes === 0) {
//     console.log(`${hours} o'clock`)
// } else {
//     console.log(`${hours} hours ${minutes} minutes`)
// }








// if (minutes > 0) {
//     timestring = `${hours} ч. ${minutes} min.`;
// } else {
//     timestring = `${hours} h.`;
// }
// console.log(timestring);
// Example 3 - Branching
// Write a script that prints the string "This is a positive number" to the console, if the user entered a number greater than zero in the prompt.If zero was entered, output to the console the string "This is zero".If a negative number is passed, in the console should be the string "This is a negative number".

// const userInput = prompt('Enter the number');
// const userInputNum = Number(userInput);
// if (userInputNum > 0) {
//     console.log("This is a positive number")
// } else if (userInputNum === 0) {
//     console.log("This is zero")
// } else {
//     console.log("This is a negative number")
// }
// Example 4 - Nested branches
// Write a script that compares the numbers in variables a and b.If both values greater than 100, then print the maximum of them to the console.Otherwise, the console should show the sum of the value b and the number 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//     console.log(a + b)
// } else {
//     console.log(b + 512)
// }
// Example 5 - Link Formatting(endsWith)
// Write a script that checks if the value of the link variable ends symbol /.if not, add this character to the end of the link value.Use if...else construction.

// let link = 'https://my-site.com/about';
// // Write code below this line
// if (!link.endsWith('/')) {
//     console.log(`${link}/`);
// } else {
//     console.log(link)
// }
// Write code above this line

// Example 6 - Link formatting(includes and logical "AND")
// Write a script that checks if the value of the link variable ends by symbol /.If not, append this character to the end of the link value, but only if link contains the substring "my-site".Use construction if...else.

// let link = 'https://somesite.com/about';
// // Write code below this line

// // Write code above this line
// console.log(link);

// Example 7 - Link formatting(ternary operator)
// Make code refactoring of the task number 4 code using ternary operator.

// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//     link += '/';
// }

// const condition = link.includes('my-site') && !link.endsWith('/') ? (link += '/') : 'not f';
// console.log(condition)

// console.log(link);
// Example 8 - if...else and logical operators
// Write a script that will output a string to the browser console depending on hours variable values.

// If the value of the variable hours:

// less than 17, output the string "Pending"
// greater than or equal to 17 and less than or equal to 24, output the string "Expires"
// greater than 24, output the string "Overdue"
// const hours = 24;

// if (hours < 17) {
//     console.log("Pending")
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires")
// } else {
//     console.log("Overdue")
// }


// Example 9 - Project submission deadline(if...else)
// Write a script to display the project deadline time.Use if...else construction.

// If there are 0 days before the deadline - output the string "Today"
// If it's 1 day before the deadline - output the string "Tomorrow"
// If it's 2 days before the deadline - output the string "The day after tomorrow"
// If it's 3+ days before the deadline - print the string "Date in the future"
// const daysUntilDeadline = 5;
// // Write code below this line

// if (daysUntilDeadline === 0) {
//     console.log("Today")
// } else if (daysUntilDeadline === 1) {
//     console.log("Tomorrow")
// } else if (daysUntilDeadline === 4) {
//     console.log("The day after tomorrow")
// } else {
//     console.log("Date in the future")
// }

// Example 10 - Project submission deadline(switch)
// Make the code refactor of the task number 5 code using switch.

// const daysUntilDeadline = 0;

// if (daysUntilDeadline === 0) {
//     console.log('Today');
// } else if (daysUntilDeadline === 1) {
//     console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//     console.log('The day after tomorrow');
// } else {
//     console.log('Date in the future');
// }

// switch (true) {
//     case daysUntilDeadline === 0:
//         console.log('Today');
//     break;
//     case daysUntilDeadline === 1:
//         console.log('Tomorrow');
//         break;
//     case daysUntilDeadline === 2:
//         console.log('The day after tomorrow');
//         break;
//     default:
//         console.log('Date in the future');
// }
// Example 11 - The for loop
// Write a for loop that prints numbers in ascending order to the browser console from min to max, but only if the number is a multiple of 5.

// const max = 100;
// const min = 20;

// for (i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }

// }


// Example 12 - User Input and Branching
// Write a script that will ask for login using prompt and log result in browser console.

// If the visitor enters "Admin", then prompt prompts for a password
// If nothing is entered or the Esc key is pressed - print the line "Canceled"
// Otherwise print the string "I don't know you"
// Check password like this:

// If the password is "I'm an admin", then output the string "Hello!"
// Else output the string "Wrong password"

// const loginRequest = prompt('Please log in')

// if (loginRequest === "Admin") {
//     const password = prompt('Please enter passowrd')
//     if (password === "I'm an admin") {
//         alert("Hello!")
//     } else {
//         alert("Wrong password")
//     }
// } else if (loginRequest === null) {
//     console.log("Canceled")
// } else {
//     alert("I don't know you")
// }

// Module 2 - Lesson 3 - Arrays
// Example 1 - Basic operations with an array
// Create an array genres with elements "Jazz" and "Blues".
//     Add "Rock and Roll" to the end.
// Print the first element of the array to the console.
// Print the last element of the array to the console.The code should work for an array random length.
// Remove the first element and print it to the console.
//     Insert "Country" and "Reggae" at the beginning of the array.
// const genres = ["Jazz", "Blues"];
// genres.push("Jazz", "Blues")
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift())
// Example 2 - Arrays and Strings
// Write a script to calculate the area of a rectangle with sides, whichvalues values are stored in the values variable as a string.Values guaranteed separated by a space.

// const values = '8 11';
// const numvalues = values.split(' ');
// console.log(numvalues)

// const area = numvalues[0] * numvalues[1];
// console.log(area)

// Example 3 - Array iteration
// Write a script to iterate over the fruits array with a for loop.For each array element print a string in the format element_number: element_value to the console.Element numbering must start from 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1} : ${fruits[i]}`)

// }
// Example 4 - Arrays and Loops
// Write a script that prints the user's name and phone number to the console. The names and phones variables store strings of names and phone numbers, separated by commas. The sequence number of names and phone numbers in the lines indicates a match.
// The number of names and phone numbers is guaranteed to be the same.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = names.split(',');

// for (i = 0; i < namesArray.length; i += 1) {
//     console.log(`${namesArray[i]} - ${phonesArray[i]}`)
// }
// Example 5 - Arrays and Strings
// Write a script that prints to the console all the words of a string except the first and the last one.The resulting string must not start or end whitespace character.The script should work for any line.

// const string = 'Welcome to the future';

// const stringToArray = string.split(' ');


// stringToArray.pop();
// stringToArray.shift();
// const newString = stringToArray.join(' ').trim();
// console.log(newString)



// Example 6 - Arrays and Strings
// Write a script that "unwraps" a string(reverse letter order) and prints it to the console.

// const string = 'Welcome to the future';

// const newString = string.split('').reverse().join('');
// console.log(newString)
// console.log(string)


// Example 7 - Sorting an array with a loop
// Write a script to sort an array of strings alphabetically by the first letter of an element.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// const sortedLangs = langs.sort((a, b) => a.localeCompare(b))
// console.log(sortedLangs)

// Example 8 - Search for an element
// Write a script to find the smallest number in an array.The code should work for any array of numbers.Use a loop to solve problems.

// const numbers = [2, 17, 94, 1, 23, 37];
// numbers.sort()
// let min = numbers[0]
// console.log(min); // 1

// Module 2 - Lesson 4 - Functions
// Example 1 - Body mass index
// Write a function calcBMI(weight, height) that calculates and returns the body mass index of a person.To do this, divide the weight in kilograms by square of a person's height in meters.

// The weight and height will be specially passed as strings.Non - integer numbers can be specified as 24.7 or 24.7, i.e.a comma can be used as a decimal separator.

// function calcBMI(weight, height) {

//     const weightNum = Number(weight.replace(',', '.'));
//     const heightNum = Number(height.replace(',', '.'));
//     const squaredHeight = heightNum ** 2
//     return Math.round(weightNum / squaredHeight)

// }



// console.log(calcBMI('88,3', '1.75'))


// Body mass index must be rounded to one decimal place;

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8



// Example 2 - Smaller of numbers
// Write a function min(a, b) that returns the smaller of the numbers a and b.

// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1



// Example 3 - Area of a rectangle
// Write a function getRectArea(dimensions) to calculate the area of a rectangle with sides, the values of which will be passed to the dimensions parameter as a string.Values are guaranteed to be separated by a space.

// function getRectArea(dimensions) {
//     const dimensionsArray = dimensions.split(' ');
//     return dimensionsArray[0] * dimensionsArray[1]
// }

// console.log(getRectArea('8 11'));



// Example 4 - Element logging
// Write a function logItems(items) that takes an array and uses a for loop that for each element of the array will print a message to the console in the format < item number > - <item value>. The numbering of elements should start with 1.

//     For example, for the first element of the array ['Mango', 'Poly', 'Ajax'] with index 0 will print 1 - Mango and for index 2 will print 3 - Ajax.

// function logItems(items) {
//     for (i = 0; i < items.length; i += 1) {
//         console.log(`${i + 1} - ${items[i]}`)
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);




//     Example 5 - Contact logging
//     Write a function printContactsInfo(names, phones) that prints to the console the name and the user's phone number. The names and phones parameters will be passed strings of names and phone numbers separated by commas. Sequence number of names and phone numbers in the rows indicate a match. Number of names and phones guaranteed to be the same.

// function printContactsInfo(names, phones) {
//     const namesArr = names.split(',');
//     const phonesArr = phones.split(',');
//     for (i = 0; i < namesArr.length; i += 1) {
//         console.log(` ${namesArr[i]} -${phonesArr[i]}  `)
//     }
// }

// printContactsInfo(
//     'Jacob,William,Solomon,Artemis',
//     '89001234567,89001112233,890055566377,890055566300',
// );




//     Example 6 - Finding the largest element
//     Write a function findLargestNumber(numbers) that looks for the largest number in array.

// function findLargestNumber(numbers) {
//     // const max = Math.max(...numbers);
//     // return max;
//     let max = numbers[0]
//     for (i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > max) {
//             max = numbers[i]
//         }

//     }
//     return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83



//     Example 7 - Average value
//     Write a calAverage() function that takes an arbitrary number of arguments and returns their average. All arguments will be only numbers.

// function calAverage(...args) {
//     const numbers = args;
//     const numberslength = numbers.length;
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total / numberslength;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2




//     Example 8 - Time Formatting
//     Write a function formatTime(minutes) that will translate the value of minutes (number of minutes) to a string in hour and minute format HH:MM.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const totalMinutes = minutes % 60;


//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(totalMinutes).padStart(2, 0);
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"





//     Example 9 -Collection of courses (includes, indexOf, push, etc.)
//     Write functions to work with the courses collection of training courses:

//     addCourse(name) - adds a course to the end of the collection
//     removeCourse(name) - removes a course from the collection
//     updateCourse(oldName, newName) - changes the name to a new one
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(course) {
//     if (courses.includes(course)) {
//         return ' You already have this course';
//     }
//     courses.push(course);
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // ' You already have this course'

// function removeCourse(course) {
//     if (!courses.includes(course)) {
//         return 'Course with this name was not found';
//     }
//     const courseToDelete = courses.indexOf(course);
//     courses.splice(courseToDelete, 1);
//     return courses;
// }

// console.log(removeCourse('React'));
// //     console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Course with this name was not found'
// console.log(removeCourse('Vue'))
// console.log(courses)
// function updateCourse(oldCourse, newCourse) {
//     const oldCourseIdx = courses.indexOf(oldCourse);
//     console.log(oldCourseIdx)
//     const newCourseIdx = courses.indexOf(newCourse);
//     courses.splice(oldCourse, 1, newCourse)
// }
// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// Module 3. Lesson 1. Objects
// Example 1 - Object Basics
// Write a script that, for the user object, successively:

// adds a mood field with value 'happy'
// replaces the value hobby to 'skydiving'
// replaces premium to false
// prints the contents of the user object in key:value format using Object.keys() and for...of
// Code
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user['premium'] = false
// const userkeys = Object.keys(user);
// for (const key of userkeys) {
//     console.log(key)
// }
// Example 2 - Object.values() method
// We have an object that stores our team salaries.Write code for summing all salaries and store the result in the sum variable.Should get 390. If the salaries object is empty, then the result should be 0.

// Code
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// Example 3 - Array of objects
// Write a function calcTotalPrice(stones, stoneName) that takes an array of objects and a string with the name of the stone.The function calculates and returns the total cost of stones with the same name, price and quantity from the object

// Code
// const stones = [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 400, quantity: 7 },
//     { name: 'Rubble', price: 200, quantity: 2 },
// ];
// Example 4 - Complex tasks
// Write a script for managing a personal account of an Internet bank.There is an account object in which it is necessary to implement methods for working with balance and transaction history.

// /*
//  * There are only two types of transaction.
//  * You can deposit or withdraw money from your account.
//  */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// /*
//  * Each transaction is an object with properties: id, type and amount
//  */

// const account = {
//     // Current account balance
//     balance: 0,

//     // Transaction History
//     transactions: [],

//     /*
//      * Method creates and returns a transaction object.
//      * Accepts amount and type of transaction.
//      */
//     createTransaction(amount, type) { },

//     /*
//      * The method responsible for adding the amount to the balance..
//      * Accepts the amount of the transaction.
//      * Calls createTransaction to create a transaction object
//      * then adds it to the transaction history
//      */
//     deposit(amount) { },

//     /*
//      *The method responsible for withdrawing the amount from the balance.
//      * Принимает сумму танзакции.
//      * Calls createTransaction to create a transaction object
//      * then adds it to the transaction history.
//      *
//      * If amount is greater than the current balance, display a message
//      * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
//      */
//     withdraw(amount) { },

//     /*
//      * The method returns the current balance
//      */
//     getBalance() { },

//     /*
//      * The method searches and returns the transaction object by id
//      */
//     getTransactionDetails(id) { },

//     /*
//      * The method returns the amount of funds
//      *a specific type of transaction from the entire history of transactions
//      */
//     getTransactionTotal(type) { },
// };