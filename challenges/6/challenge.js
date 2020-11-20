/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const extractSize = htmlTemplate => {
  const htmlKeys = htmlTemplate.replace(/ /g, '').match(/width:\d*|height:\d*/g);
  if (htmlKeys) {
    return htmlKeys.map(a => {
      return { [a.split(':')[0]]: parseInt(a.split(':')[1]) }
    })
      .reduce((acc, value) => {
        return { ...value, ...acc }
      }, {})
  }
  return { width: 0, height: 0 }
}


module.exports = extractSize