const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
function subtrDiagonal(arr) {
  let a = 0,
    b = 0,
    sum = 0;

  // sum diagonal
  for (let i = 0; i < arr.length; i++) {
    a += arr[i][i];
    b += arr[i][arr.length - 1 - i];
  }

  // substraction between result sum diagonal
  sum = Math.abs(a - b);
  return sum < 0 ? sum * -1 : `${a} - ${b} = ${sum}`;
}
const show = subtrDiagonal(matrix);
console.log(show);
