// console.log(a()) reference error
let a=function()
{
    return "hello-world"
}
console.log(a)  
// {
//    return "hello-world"
// }
console.log(a())
// hello-world



let main=function()
{
    let a=Number(prompt("enter a"))
    let b=Number(prompt("enter b"))
    let c=Number(prompt("enter c"))
    let d=a+b+c
    console.log(d)
    let e=a-b-c
    console.log(e)
    let f=a*b*c
    console.log(f)
    if(a>=b && a>=c){
        console.log("a is greatest")
    }else if(b>=a && b>=c){
        console.log("b is greatest")
    }else{
        console.log("c is greatest")
    }
}
main()
// input numbers:3,1,2
// 6
// 0
// 6
// a is greatest

let b=function(){
    console.log(a)
    console.log(arguments[1])
}
b(10,20,30)

function main1(a){
    console.log(a)

}
main(function(){
    return "iam cbf1"
})

main(function(){
    return "iam cbf2"
})
