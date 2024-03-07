// JSnack 1

const zucchine = [
  {
    varietà : '1',
    peso : 100,
    lunghezza : 30
  },
  {
    varietà : '2',
    peso : 70,
    lunghezza : 20
  },
  {
    varietà : '3',
    peso : 100,
    lunghezza : 30
  },
  {
    varietà : '4',
    peso : 110,
    lunghezza : 28
  },
  {
    varietà : '5',
    peso : 80,
    lunghezza : 20
  },
  {
    varietà : '6',
    peso : 100,
    lunghezza : 34
  },
  {
    varietà : '7',
    peso : 70,
    lunghezza : 32
  },
  {
    varietà : '8',
    peso : 60,
    lunghezza : 18
  },
  {
    varietà : '9',
    peso : 100,
    lunghezza : 38
  },
  {
    varietà : '10',
    peso : 90,
    lunghezza : 22
  }
]

let sum = 0;

zucchine.forEach(zucchina => {
  sum += zucchina.peso
})

console.log(sum);

// JSnack 2

let arrayZucchine = [];
console.log(arrayZucchine);
for (let i = 0; i < 10; i++) {
  const length = Math.floor(Math.random() * 25) + 5; 
  const weight = calculateWeight(length);
  arrayZucchine.push({ length, weight });
}

function calculateWeight(length) {
  return length * 0.1;
};

const zucchineCorte = arrayZucchine.filter(zucchina => zucchina.length < 15);
const zucchineLunghe = arrayZucchine.filter(zucchina => zucchina.length >= 15);

// console.log(zucchineCorte);

function calculateTotalWeight(arrayZucchinaLength) {
  return arrayZucchinaLength.reduce((totale, zucchina) => totale + zucchina.weight, 0);
}

console.log('Peso totale delle zucchine corte:', calculateTotalWeight(zucchineCorte).toFixed(2)  + ' gr');
console.log('Peso totale delle zucchine lunghe:', calculateTotalWeight(zucchineLunghe).toFixed(2)  + ' gr');

// JSnack 3
const string = 'ciao';
const reversedString = reverse(string);

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log('String :', string);
console.log('Reversed String :', reversedString);


// JSnack 4

const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const mergedResult = mergeArrays(array1, array2);
console.log(mergedResult);

function mergeArrays(array1, array2) {
  const mergedArray = [];

  
  for (let i = 0; i < array1.length; i++) {
      mergedArray.push(array1[i]);
      mergedArray.push(array2[i]);
  }

  return mergedArray;
}
