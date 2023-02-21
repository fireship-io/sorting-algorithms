export function gnomeSort(arr) {
    let i = 1; // start at 1 because we're comparing i-1 to i
    let j = 2; // start at 2 because we're comparing i-1 to i
    while (i < arr.length) { 
        if (arr[i - 1] <= arr[i]) { 
            i = j;
            j++;
        } else {
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; // swap
            i--;
            if (i === 0) {
                i = j;
                j++;
            }
        }
    }
    return arr;
}