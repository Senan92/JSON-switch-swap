
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const data = { person: "beans" }
console.log(data)

const reversePair = ([k, v]) => [v, k]

const fromEntries = (acc, [k, v]) => ({ ...acc, [k]: v })

const reverseObj = obj =>
  Object.entries(obj) // steg 1, skapa en lista [key, val]
    .map(reversePair) // steg 2, reverse.
    .reduce(fromEntries, {})     // steg 3, reducera tillbaka till ett objekt.
    
console.log(reverseObj(data)) // { beans: 'person' }


const mapValues = f => obj =>
  Object.entries(obj)
    .map(([k, v]) => [k, f(v)])
    .reduce(fromEntries, {})
    
/*
Invertering
*/

const reverse = str => [...str].reverse().join('');

/* Sista beräkningen */

const sananify = compose(mapValues(reverse), reverseObj);

console.log(sananify(data))