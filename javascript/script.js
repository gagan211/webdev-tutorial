let boxes=document.getElementsByClassName("box")

function randomgen() {
    let a=Math.ceil(0+Math.random()*255)
    let b=Math.ceil(0+Math.random()*255)
    let c=Math.ceil(0+Math.random()*255)    
    return `rgb(${a},${b},${c})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor=randomgen()
});

hello= ()=>{
    alert("you pressed a box damn" );
}