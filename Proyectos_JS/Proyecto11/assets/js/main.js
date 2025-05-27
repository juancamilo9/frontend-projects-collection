let phrase = "Este curso tiene muchos proyectos web"
let tochange =  prompt(`Ingresa una palabra del la frase para cambiar en la siguinete frase: "${phrase}"`)
let newWord =  prompt("Ingresa la nueva palabra para remplazar")

function changeWord(original,replace,phrase){
  let search = phrase.search(original)
  let phraseFinal = phrase
  if(search !== -1){
    console.log(search)
    phraseFinal = phrase.replace(original,replace)
  }else{
    console.log(search)
    phraseFinal = "La palabra no existe"
  }

  return phraseFinal
}


alert(changeWord(tochange,newWord,phrase))
