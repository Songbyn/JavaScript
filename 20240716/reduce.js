let arr = ['first', 'second', 'third'];

let obj = arr.reduce((accumulator, value, index) => {
  return {...accumulator,['key' + index]: value};
}, {});

console.log(...arr);