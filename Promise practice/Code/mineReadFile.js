function mineReadFile(path){
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
mineReadFile('./sample.txt')
.then(value =>{
    console.log(value.toString())
}, reason =>{
    console.log(reason)
})
//error version
mineReadFile('./sample.tt')
.then(value =>{
    console.log(value.toString())
}, reason =>{
    console.log(reason)
})