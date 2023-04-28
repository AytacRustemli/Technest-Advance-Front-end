function generatePath(...args) {
  return args.join('/');
}

const input = prompt("Soz yaz : ");
const words = input.split(" ");
const output = generatePath(...words);

alert("Result: " + output);
