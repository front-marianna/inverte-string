function inverterString(str) {
  let novaString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    novaString += str[i];
  }

  return novaString;
}

const minhaString = "Marianna";
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // !dlroW ,olleH