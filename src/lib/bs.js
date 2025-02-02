export const bs = (arr, x, lb, ub) => {
  if (ub >= lb) {
    const mid = (lb + ub) / 2;
    if (x === arr[mid]) {
      return mid;
    } else if (arr[mid] < x) {
      return bs(arr, x, lb, mid - 1);
    } else {
      return bs(arr, x, mid + 1, ub);
    }
  } else {
    return -1;
  }
};
