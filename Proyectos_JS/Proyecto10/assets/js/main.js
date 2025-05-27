let word = prompt("Ingresa una palabra cualquiera");

function separateWordAndUpper(word) {
  let len = word.length;
  console.log(`Longitud de la palabra: ${len}`);
  console.log(word.toUpperCase());
}

separateWordAndUpper(word);
