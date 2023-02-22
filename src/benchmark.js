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

// Main Testing

// const testData = makeShuffledRange(10000);
// const testData = makeRandomArrayOfChars(10000);
// const testData = chance.n(chance.character, 10000);

for (let numElements = 100; numElements < 10000000; numElements *= 10) {

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
	
	console.log(`\nGenerating test data for ${numElements} elements...`);
	const testData = chance.n(chance.hammertime, numElements);
	console.log('Running tests...');
	const results = [];
	
	// O(n)
	runIt(radixSort); // only works on ints
	// O(n log n)
	runIt(jsSort);
	runIt(mergeSort);
	runIt(quickSort);
	runIt(heapSort);
	// Depends
	runIt(shellSort);
	// O(n^2)
	runIt(bubbleSort);
	runIt(cocktailShakerSort);
	runIt(gnomeSort);
	runIt(insertionSort);
	runIt(selectionSort);
	
	
	// runIt(bogoSort); // careful now
	
	console.table(results.sort((a, b) => a.time - b.time));
	
}