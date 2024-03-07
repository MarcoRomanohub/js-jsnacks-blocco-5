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
