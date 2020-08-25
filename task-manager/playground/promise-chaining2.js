
require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove('5f42fadbda61883db4523ecf').then(res => {
//     console.log(res)
//     return Task.countDocuments({ completed: false })
// }).then(res => {
//     console.log(res)
// }).catch (e => console.log(e))

const deleteTaskAndCount = async (id) => {
    const nothing = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f43d6d1bba16f09080e2605').then(res => console.log(res)).catch(e => console.log('e', e))