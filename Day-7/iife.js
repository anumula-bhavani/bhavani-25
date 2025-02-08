(function(){
    console.log("hello")
})();

((a , b) => {
    console.log(a + b);
})(10,10);

(function demo(){
    console.log("hiii")
})();

//array in js
//it is use to store of an different data-types.
//heterogenous in js

//two-ways

//declaration way
let arr = [10 , "hello" , true ,1n , undefined]
console.log(arr);

//using new keyword

let arr1 = new Array(10,20,30)
console.log(arr1);

//objects in js
//used to store data in the form of key and value pair.

//declaration way

let obj = {
    name : "abc", 
    id : 1, 
    boolean :true,
    arr : [10,20,30],
    null : null,
    undefined : undefined,
    demo : function(){
        console.log("hii");
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj.id);
obj.demo()

//using constructor function
//used to create object

function obj1(name , id){
    this.name = name;
    this.id = id;
}

let p1 = new obj1("abc",1)
console.log(p1);
console.log(p1.name);
console.log(p1.id);

