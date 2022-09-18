function Promise(executor){
    this.PromiseState = 'pending'
    this.PromiseResult = null
    this.callback = []
    const self= this
    function resolve(data){
        //state can only change one time
        if (self.PromiseState !== 'pending') return
        //1. change state
        self.PromiseState = 'fulfilled';
        //2. set value
        self.PromiseResult = data

        self.callback.forEach(item => {
            item.onResolved(data)
        })
    }
    function reject(data){
        if (self.PromiseState !== 'pending') return
        self.PromiseState = 'rejected';
        //2. set value
        self.PromiseResult = data

        self.callback.forEach(item => {
            item.onRejected(data)
        })
    }
    //同步调用
    try{
        executor(resolve, reject);
    }
    catch(e){
        reject(e)
    }
}

//define then
Promise.prototype.then = function(onResolved, onRejected){
    const self = this
    if (typeof onRejected !== 'function'){
        onRejected = reason => {
            throw reason
        }
    }
    if (typeof onResolved !== 'function'){
        onResolved = value => value;
    }

    return new Promise((resolve, reject) => {
        function callback(type){
            try {
                let result= type(self.PromiseResult)
                if (result instanceof Promise) {
                    result.then(value => {
                        resolve(value)
                    }, reason => {
                        reject(reason)
                    })
                }
                else {
                    resolve(result)
                }
            } catch(e) {
                reject(e)
            }
        }
        if (this.PromiseState === 'fulfilled') {
            callback(onResolved);
        }
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
        }
        if (this.PromiseState === 'pending') {
            this.callback.push(
                {
                    onResolved: function(){
                        callback(onResolved);
                    },
                    onRejected:function(){
                        callback(onRejected);
                    }
                }
            ) 
        }
    })
}

Promise.prototype.catch = function(onRejected){
    return this.then(undefined, onRejected)
}


Promise.resolve = function(v){
    return new Promise((resolve, reject) => {
        if (v instanceof Promise) {
            v.then(val => {
                //similarly, the state and result of the final returned promise is
                // is depending on the v(你成功我成功)
                resolve(val)
            }, r => {
                reject(r)
            })
        }else {
            resolve(v);
        }
    })
}

//result is always rejected
Promise.resolve = function(reason){
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}

Promise.all = function(promises){
    let cnt = 0;
    let arr = [];
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                cnt++;
                arr[i] = v
                if (cnt == promises.length) {
                    resolve(arr);
                }
            }, r => {
                reject(r)
            })
        }
    })
}

Promise.race = function(promises){

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(v => {
                resolve(v) // state can change only once
            }, r => {
                reject(r) // whoever change the state it changed forever
            })
        }
    })
}
