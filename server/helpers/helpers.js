// require('colors');
const Diff = require('diff');
require('colors')

module.exports = function colorDiffs(text1, text2){
    console.log(text1, text2)
    console.log('\n')
    var text1 = text1.toString('')
    var text2 = text2.toString('')

    var diff = Diff.diffChars(text1, text2);

    diff.forEach((part) => {
    const color = part.added ? 'green' :
      part.removed ? 'red' : 'grey';
      process.stderr.write(part.value[color]);
  })

  return diff

}
 