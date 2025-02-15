function main(m,n)
{
    new Promise((resolve , reject)=>{
    setTimeout(()=>{
        if(isNaN(m) || isNaN(n)){
            return reject()
        }
        for(let i=m; i<=n; i++)
            {
            console.log(i);
        }

    },5000)
})
.then(()=> console.log("promise is resolved"))
.then(()=>console.log(10*10))
.catch(()=>console.log("error occurs"))
}

main(1,10)

function demo(){
    console.log("no's printed");
}
demo()
//promise chining
//using multiple then methods
//async and await keyword used to avoid promise chining.

//asynchrous function
//--> making a way for other function to execute first.

//two-methods
//1)setTimeout(cbf , delay-time)
//2)setInterval(cbf , delay-time)
//prent inside window object

window.setTimeout(()=>{
    console.log("iam settimeout");
},5000)

window.setInterval(()=>{
    console.log("iam setinterval");
},3000)

//promise

//--> it is an object
//-->used to look after async function.

//3-phase
//1)pending phase
//2)resolve / fulfill phase
//3)reject phase


let online = window.navigator.online

new Promise((resolve , reject)=>{
    setTimeout(()=>{
        if(online === true)
        {
            return resolve()
        }else{
            return reject()
        }
    },5000)
})
.then(()=> console.log("online...")
)
.catch(()=> console.log("of-line")
)