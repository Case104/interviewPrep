function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    left[0] <= right[0]
      ? sorted.push(left.shift())
      : sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

const arr = [6, 79, 7, 2, 0, 6, 4, 1];
