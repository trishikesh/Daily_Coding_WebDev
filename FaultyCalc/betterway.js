let x = Math.random();
let a = prompt( "Enter first number: ");
let op = prompt( "Enter operator: ");
let b = prompt( "Enter second number: ");


let obj = {
    "+" : "-",
    "-" : "/",
    "*" : "+",
    "/" : "**",
}

console.log(x)
if (x > 0.1){
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`)
}
else{
    op = obj[op]
    alert(`The result is ${eval(`${a} ${op}  ${b}`)}`)
}