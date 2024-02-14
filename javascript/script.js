
// async function getdata() {
// return new   Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(455)
//     console.log("hey")
//   }, 3000);
// })



async function getdata() {
    let x = await fetch("http://jsonplaceholder.typicode.com/todos/1");
    let data = await x.json();
    console.log(data);
}

async function main() {
    

console.log("loading modules")
let data= await getdata()
console.log(data)
console.log("do something else")
console.log("load data")
console.log("process data")
}
main()
// data.then((v) => {
//     console.log(data)
//     console.log("process data")
// }
// )