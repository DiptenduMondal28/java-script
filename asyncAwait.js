console.log("person 1")
console.log("person 2")

const wifeGetsTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket")
        },3000)
    })

const wifePopcorn= wifeGetsTicket.then((t)=>{
    console.log("here the ticket")
    console.log("wife:hungry")
    console.log("husband:lets popcorn")
    return new Promise((resolve,reject)=>{
        resolve(`popcorn then ${t}`)
    })
})


const wifeButter=wifePopcorn.then((t)=>{
    console.log("wife:i need a butter")
    console.log("husband:ok take it")
    return new Promise((resolve,reject)=>{
        resolve(`butter then ${t}`)
    })
})

wifeButter.then((t)=>{
    console.log(t)
    console.log("/ / / /  / / / / /bracket after this async function output / / / / / / / / /")
})




const preMovie=async()=>{
    const wifebringTicket=new Promise((resolve,reject)=>{
        setTimeout(()=> resolve("ticket"),3000)
    })

    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'))
    const getbutter=new Promise((resolve,reject)=>resolve('butter'))
    const coldDrink=new Promise((resolve,reject)=>resolve('colddrink'))

    let ticket= await wifebringTicket;

    console.log(`wife i have ticket${ticket}`)
    console.log('husband:we should go in')
    console.log('wife:i am hungry')

    let popcorn=await getPopcorn

    console.log(`husband:lets  ${popcorn}`)
    console.log("husband:we should go now")
    console.log("wife :i need some butter")

    let butter=await getbutter

    console.log(`husband:lets  ${butter} on popcorn`)
    console.log("wife:give me")
    
    console.log("wife:i need coldrinks")
    

    let bringColdDrinks=await coldDrink

    console.log(`husband: take  ${bringColdDrinks}`)
    console.log("husband:anything else darling")
    console.log("wife:no now go we are getting late")
    console.log("husband:thanks for remainder")



    return ticket;
}

preMovie().then((m)=>console.log(`person 3 ${m}`))

console.log("person4")