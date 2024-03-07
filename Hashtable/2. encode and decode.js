// encode and decode an array

function encode(str) {
  let result = "";
  str = str.split(" ");

  for (let word of str) {
    result += word.length + "#" + word;
  }
  return result;
}

function decode(str) {
  let result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") j++;

    let length = parseInt(str.substring(i, j));
    let word = str.substring(j + 1, j + length + 1);
    result.push(word);

    i = j + length + 1;
  }

  return result.join(" ");
}
