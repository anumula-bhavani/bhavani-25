console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "flipkart"
console.log(document.body);

let link = document.links
//console.log(link);
//console.log(link[0]);
//console.log(link[1]);
//console.log(link[2]);

for(let i=0; i<link.length; i++)
{
    console.log(link[i]);
    link[i].className = "demo"
    link[i].href = "http://www.youtube.com"
    link[i].target = "_blank"
}

//in-direct access (methods in dom)
//1)document.getElementById("value")
//2)document.getElementByclassName("value")
//3)document.getElementByTagName("value")
//4)document.getElementByName("value")
//5)document.querySelector("value")
//6)document.querySelectorAll("value")

let a = document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textcontent = "batch 6"
console.log(a.textContent);
a.style.backgroundColor = "red"
a.style.textAlign = "center"

let b = document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].targetContent);
b[0].style.backgroundColor = "lightblue"

console.log(b[1]);

let c = document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color = "red"
c[1].textContent = "hello"

let d = document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor = "crimson"
//console.log(document.body.childNodes);

//document.querySelector
//-->we havepass value with css symbol.
//-->will return reference of first-element.

let e = document.querySelector("#demo")
console.log(e);

let e1 = document.querySelector("demo1")
console.log(e1);

//document.querySelectorAll
//-->we have pass value with css symbol.
//-->will return referencecin a node-list.

let f = document.querySelectorAll("#demo")
console.log(f);
console.log(f[0]);

let f1 = document.querySelectorAll("demo1")
console.log(f1);
console.log(f1[1]);

//events in dom
//--------------
//-->it is an action performed by end-user on a web-page

//types:-
//1)key-board event
       //key-up event
       //key-down event
       //key-press event

//2)mouse event
       //onmouseover event
       //onmouseleave event
       //dbclick

//3)form event
       //input event
       //blur event
       //focus event

//4)pointer event
       //click event

