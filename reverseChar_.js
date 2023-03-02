function reversChar(str) {
  let result = "";
  if (str) {
    let arrStr = [];
    let arr = str.replace(/[^a-z]/gi, "").split("");
    for (let i = arr.length - 1; i >= 0; i--) {
      arrStr.push(arr[i]);
    }
    result = arrStr.join("");
  }
  return result;
}
const str = "NEGIE1";

const show = reversChar(str);
console.log(show);
