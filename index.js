console.log("hello world");
//document.write("viral js");
// console.warn("last chance");
// console.error("last chance error");
// console.assert(5 < 6);

// var num1 = 43;
// var num2 = 32;
// f = num1 + num2;
// console.log(f);

// arr = [2, 3, 5, 6];

//js operators

/* 
arithmetic operator
+*-/
assignment operator
=,!=
=+-=/+*+
comparition operator
==,!=,===,!===,<=,>=,<>

logicsl operstor
&&,||

*/


// functions
function avg(a, b) {
    return (a + b) / 2;

}
c = avg(4, 2);
// console.log(c)


// conditional in js
// if,else if,else,
let x = 5;
if (x > 2) {
    // console.log("yay");
} else {
    // console.log("no");
}


// loops 
//  for,while,do while

var arr = [1, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

arr.forEach(function(element) {
    // console.log(element);
})


// array
// let arer = [1, 2, 3, 4];
// console.log(arer.length);
// console.log(arer.push(4));
// console.log(arer.pop());
// console.log(arer.shift()); remove first element
// console.log(arer.unshift()); adding first element



// string

// ms = "hii are you there";
// ms.length
// ms.slice(2,5);
// ms.upperCase()
// ms.lowerCase()
// ms.endWith("re")
// ms.indexof("are");
// ms.lastindexof("r");
// ms.concate(_);
// ms.replace("are","is")

// d = new Date();
// console.log(d);
// console.log(d.getTime());
// console.log(d.getFullYear());

document.getElementById("click").click()
document.getElementById("click").style.border = "black";
document.getElementById("click").style.background = 'red'

let elecl = document.getElementsByClassName("container");
//console.log(elecl); // class is many so elements use
elecl[0].style.background = "yellow";
// elecl[0].classList.add("some class"); 
//elecl[0].classList.add(text.vkd);
//elecl[0].classList.remove(text.vkd);
// elecl[0].innerHTML to get html file 
// elecl[0].innertext to get tect file in classs
// document.getElementByTagNmae("click").click()



//query selector
// sel = document.querySelector(".container");
// console.log(sel);
// sel = document.querySelectorAll(".container");
// console.log(sel);

// use . for class and use # for id
// (#idnaME);/

// Events in js 
//events means heppaning
function clicked() {
    // alert("power ranger is coming")
    // console.log("clicked by needer")

}
// in event window is using for running not document
// reload,mouseover,onclicked , mouseout,mouseon,mouseup(clicked and remove)
// mousedown
//classname.addeventlistner

// container.addEventListner(clicked, function() {


//     console.log("click ho raha")
// })


// arrow function
// let sum = function(a, b) {
//     return (a + b);

// }
// sum = (a, b) => {
//     return a - b;
// }



//settimeout and setinterval
// logging = () => {
//         console.log("now see")
// }
// setTimeout(logging, 4000); //4000 = 4000milisecond
// setInterval(logging, 4000); //reapetedly run
//  same all //clearinterval(intervel id ) // for stop running interval


//LOcasSrorage
// this is use for data store in user computer as string
// localStorage.setItem("name","viral");
// localStorage.getItem("name");//viral


// JSON = javascript object notation open standerd file format
// this is use for data exchange in js (data-interchange)
// it is easy to human to read and write
//easy to compuer parse and generate 
// it is pair or array form


// obj = { name: 'viral', surname: 'patel' };
// jso = JSON.stringify(obj);
// console.log(jso);
// parsed = JSON.parse(`{"name":"viral","surname":"patel"`);

// console.log(parsed);


// template literal
// namw = "vvs"
// console.log(` this is my ${namw} array`);

// ECMA script