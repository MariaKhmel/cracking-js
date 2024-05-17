


const makeCounter = () => {
    let currentCounter = 0;
    
    const getCurrentCount = () => {
        return currentCounter;
    }

    const increaseCount = () => {
        currentCounter +=1;
        return currentCounter;
    }

    const decreaseCount = () => {
        currentCounter = currentCounter - 1;
        return currentCounter;
    }

    
    return { getCurrentCount, increaseCount, decreaseCount };
}

const counter1 = makeCounter();
const counter2 = makeCounter();


// console.log(counter1.getCurrentCount());
// console.log(counter1.increaseCount());
// console.log(counter1.decreaseCount());
// console.log(counter1.getCurrentCount());
// console.log(counter2.increaseCount());
// console.log(counter2.increaseCount());
// console.log(counter2.increaseCount());
// console.log(counter1.getCurrentCount());


function show(...args) {
    console.log('this:', this);
    console.log('args:', args);
}

// show.apply({ name: 'Bob' }, ['here', 'there'])
const showThis = show.bind({ name: 'Bob' }, 'here', 'there')
// showThis()

// const lowerCase = s => s.toLowercase();
// const addSymbol = s => `${s}`;
// const reverseString = s => s.split('').reverse().join('');

// const compose = (...allFunctions) => arg => {
//     return allFunctions.reduce((prevFunc, currentFunc) => currentFunc(prevFunc), arg);
// }
// const procesString = compose(lowerCase, addSymbol, reverseString);
// procesString('acvfds')

const multiply = (num1, num2) => {
    console.log('num1', num1);
    console.log('num2', num2);
    return num1 * num2
};
const multiply5 = num2 => {
    return multiply(5, num2)
};
const multiply4 = multiply.bind(null, 4)

// console.log(multiply5(2));
// console.log((multiply4(3)));


const multiplyCurried = (num1, num2) => {
    // console.log(num1);
    // console.log(num2);
    if (arguments.length === 2) {
        return num1 * num2;
    }

    return (num3) => multiplyCurried(num1,num3);
}


const result = multiplyCurried(3)(5)();
// console.log(result);

const cat = [1, 3, 'dog', 'Poly'];
const isDog = el => el === 'dog';

// console.log(cat.indexOf(3));
// console.log(cat.findIndex(el=>el===3));

// const students = [
//     { id: 1, name: 'Alice', age: 22 },
//     { id: 2, name: 'Bob', age: 25 },
//     { id: 3, name: 'Charlie', age: 20 }
// ];

// const namesArray = students.reduce((newStudentsList, element, index, array) => {
//     return [...newStudentsList, element.name ] 
// }, [])

// console.log(namesArray);

// const totalAge = students.reduce((totalNumber, element, index, array )=> {
//     totalNumber += element.age;
//     return totalNumber;
// }, 0);

// console.log(totalAge);

// const newArray = students.reduce((newStudentsArray, element, index) => {
//     newStudentsArray[element.name] = element;
//     return newStudentsArray;
    
// }, {})

// console.log(newArray);

const note = {};
note.name = 'ppp';
// console.log(note);

const students = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 20 }
];

// students.sort((a, b) => a.age - b.age);

// students.sort((a, b) => b.name.localeCompare(a.name))

// const newS = students.slice(0,1)
// console.log(newS);


async function fetchPokemonByID() {
    return new Promise((resolve, reject) => {
        return fetch('https://pokeapi.co/api/v2/item/1/?limit=10&offset=10');
    }).catch(e=>reject(e))
    }
   
        

fetchPokemonByID()

async function newFestch() {
    for (let i = 0; i <= 10; i += 1){
        
    }
}

// console.log(Array.from('Bob'));

// console.log([].map.call('somesting', (letter) => letter));

const multiplyN = (num1, num2) => {
    if (num2) {
        return num1 * num2;
    }
    
    return (num3) => num1 * num3;

}

// console.log(multiplyN(2, 3));
// console.log(multiplyN(2)(5));
// const someFunc = multiplyN(2);
// console.log(someFunc(4));