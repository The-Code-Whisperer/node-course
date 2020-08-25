

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = () => names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 1000)
// }

// geocode('Philadephlia', printsArg = function(x) {console.log(x)});

// const add = (num1, num2, callback) => {
//     setTimeout(() => {
//         callback(num1+num2);
//     }, 2000);
// }

// add(1, 2, (argument) => {console.log(argument)})

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is an error message', undefined)
        callback(undefined, [1, 4, 7])
    }, 500)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})