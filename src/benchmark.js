import { bogoSort } from './bogo.js';
import { bubbleSort } from './bubble.js';
import { quickSort } from './quick.js';
import { selectionSort } from './selection.js';
import { insertionSort } from './insertion.js';
import { mergeSort } from './merge.js';
import { heapSort } from './heap.js';
import { radixSort } from './radix.js';
import { cocktailShakerSort } from './cocktail.js';
import { shellSort } from './shell.js';
import { gnomeSort } from './gnome.js';
import { jsSort } from './jssort.js';

import Chance from 'chance';

const chance = new Chance();

// Helper Functions

function makeShuffledRange(len) {
    const arr = [];
    for (let i = 0; i <= len; i++) {
        arr.push(i);
    }
    return arr.sort(() => Math.random() - 0.5);
}

function isSorted(arr) {
    let sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}

function runIt(algo) {
    const cp = [...testData];
    const start = performance.now();
    const result = algo(cp);
    results.push({ name: algo.name, time: performance.now() - start })
    !isSorted(result) && console.log(algo.name, 'sorting failed!');
    result.length !== testData.length && console.log(algo.name, 'length mismatch!');
}

// Main Testing

// const testData = makeShuffledRange(10000);
// const testData = makeRandomArrayOfChars(10000);
// const testData = chance.n(chance.character, 10000);
const testData = chance.n(chance.hammertime, 10000);
const results = [];


runIt(selectionSort);
runIt(bubbleSort);
runIt(quickSort);
runIt(insertionSort);
runIt(mergeSort);
runIt(heapSort);
runIt(cocktailShakerSort);
runIt(shellSort);
runIt(gnomeSort);
runIt(radixSort); // only works on ints
runIt(jsSort);
// runIt(bogoSort); // careful now

console.table(results.sort((a, b) => a.time - b.time));
