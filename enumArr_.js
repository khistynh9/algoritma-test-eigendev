const arr1 = ["dz", "bbb", "dz", "bbb", "bbb", "bbb"];
const arr2 = ["bbb", "ac", "dz"];
const a = [...arr1, ...arr2];

function countDuplicate(arr) {
  let final = {};

  if (arr) {
    let counts = {};

    // count duplicate from two array to obj
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i]]) {
        counts[arr[i]] += 1;
      } else {
        counts[arr[i]] = 1;
      }
    }
    // filter obj array
    for (let prop in counts) {
      if (counts[prop] >= 1) {
        final[prop] = counts[prop] - 1;
      }
    }
  }
  return final;
}

function resultPrint(obj) {
  let result = "";
  for (let prop in obj) {
    obj[prop] < 1
      ? (result += `kata '${prop}' tidak ada pada INPUT, `)
      : (result += `kata '${prop}' terdapat ${obj[prop]} pada INPUT, `);
  }
  console.log("OUTPUT = ", obj);
  console.log(result);
}

const hasil = countDuplicate(a);
resultPrint(hasil);
