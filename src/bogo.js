export function bogoSort(arr) {
  while (!sorted(arr)) {
    arr = shuffle(arr);
  }

  return arr;
}

function shuffle(arr) {
  let m = arr.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
}

function sorted(arr) {
  let sorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      sorted = false;
    }
  }

  return sorted;
}
