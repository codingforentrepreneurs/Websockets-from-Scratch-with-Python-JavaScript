function success(x) {
    console.log('success', x.data)
}

function error(err) {
    console.log('err', err.data)
}

// function handleResolve(resolve){

// }

// ajax -> XMLHttpRequest, fetch
const laundryPromise = new Promise(resolve=>{
    resolve({data: "Take out laundry"})
    
    //throw ({data: "This is an error. I forgot"})

}) // built-in class

// console.log(laundryPromise)

// laundryPromise.then(success).catch(error)

// console.log("When does this run??")

async function helloThere () {
    const result = await laundryPromise.catch(x=>{
        throw(x)
    })
    // return result
}

helloThere().then(x=>{
    console.log(x)
}).catch(x=>{
    console.log('err', x)
})
// console.log(result)