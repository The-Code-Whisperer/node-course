const fs = require('fs')

// const book = {
//     title: '12 Rules for Life',
//     author: 'Jordan Peterson'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON)
data.name = "Steven"
data.age = "23"
console.log(data);