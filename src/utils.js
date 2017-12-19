//Vérifie que tout les inputs passés en args possède une valeur (pas de blanc/espace)
export const isInputFilled = (...args) => {
  return args.every(arg => arg.trim().length > 0)
}

//Pour toute les propriétés de type string d'un obj donné, trim la valeur
export const sanitizeObj = obj => {
  const output = obj;
  for(let prop in output) {
    if(typeof output[prop] === "string") output[prop] = output[prop].trim();
  }
  return output;
}

//Transforme une chaîne de caractère en tableau en séparant par les ','
export const makeArr = str => str.split(',').map(v => v.trim());

//Retourne l'obj correspondant à l'id donné dans le tableau en argument
export const giveObjFromId = (arr, id) => arr.filter(obj => obj.id === id)[0];

//Retourne un tableau ne contenant pas l'objet avec la propriété id dont la valeur est passé en argument
export const filterWithoutThisId = (arr, id) => arr.filter(obj => obj.id !== id);
