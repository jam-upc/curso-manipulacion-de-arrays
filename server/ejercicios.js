

const lines = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

function countWords(array) {
  let numWords =0;
  array.flatMap(item => numWords += item.split(' ').length);
  return numWords;
}

console.log(countWords(lines));