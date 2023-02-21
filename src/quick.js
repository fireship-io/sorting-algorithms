export function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return;
    }
  
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  
    return arr;
  }
  
  function partition(arr, left, right) {
    let pivotValue = arr[right];
    let partitionIndex = left;
  
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
  
    swap(arr, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }


  


  export function quickSortCheatMode(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)]
  }



























  
// export function quickSort(arr) {

//     // if (arr.length < 2) {
//     //   return arr;
//     // }
//     // const pivotIndex = Math.floor(arr.length / 2);
//     // const pivot = arr.splice(pivotIndex, 1)[0];
//     // const left = [];
//     // const right = [];

//     // for (let i = 0; i < arr.length; i++) {
//     //   if (arr[i] < pivot) {
//     //     left.push(arr[i]);
//     //   } else {
//     //     right.push(arr[i]);
//     //   }
//     // }

//     // return [...quickSort(left), pivot, ...quickSort(right)];

// }
