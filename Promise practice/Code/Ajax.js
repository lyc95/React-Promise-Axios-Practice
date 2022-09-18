const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://xxxxxxxxxxx')
    xhr.send()
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            }
        }else {
            reject(xhr.status)
        }
    }
})

p.then(value => {
    //print out response body
    console.log(value)
},reason => {
    //reponse error status code
    console.log(reason)
})

//Promise encapsolate AjAX
function senAJAX(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.send()
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response)
                }
            }else {
                reject(xhr.status)
            }
        }
    })
}
senAJAX('https://xxxxxxxxxxx')
.then(value =>{resolve(value)},reason => {console.warn(reason)})