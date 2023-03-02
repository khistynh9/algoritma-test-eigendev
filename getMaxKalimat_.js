function maxVal(obj) {
  let max = 0,
    maxKey = "";

  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxKey = `${char} : ${max}`;
    }
  }
  return maxKey;
}

function countVal(str) {
  let obj = {};
  if (str) {
    const strtArr = str.split(" ");
    let arr1 = [];
    let arr2 = [];
    // count value in array char
    for (let i = 0; i < strtArr.length; i++) {
      arr1.push(strtArr[i]);
      let element = strtArr[i].split("");
      arr2.push(element.length);
    }

    // convert to object from 2 array
    arr1.forEach((key, i) => (obj[key] = arr2[i]));
  }
  return obj;
}
const str = "Saya sangat senang mengerjakan soal algoritma";

const result = countVal(str);
const show = maxVal(result);
console.log(show);
