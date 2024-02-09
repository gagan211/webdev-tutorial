// let boxes = document.getElementsByClassName("box")
// console.log(boxes);

// document.getElementById("red").style.backgroundColor="green"

// document.querySelectorAll(".box").style.backgroundColor="green"

let selecto=document.querySelectorAll(".box");//this will return the elements in form of the nodelist and you cant access them directly hence we use for loops / for each loops


document.querySelectorAll(".box").forEach(e=>{
    console.log(e);
    e.style.backgroundColor="green";
})

selecto.forEach(elem => {
    elem.style.backgroundColor="pink";
});

e=document.getElementsByTagName("div")
e[2].style.backgroundColor="yellow";