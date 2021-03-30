
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";


// const numbersCollection = new NumbersCollection([1000, 3, -2, 0]);
// const sorter = new Sorter(numbersCollection);

// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('fsdfXXXsdhu')
const sorter = new Sorter(charactersCollection)

sorter.sort()
console.log(charactersCollection.data);

