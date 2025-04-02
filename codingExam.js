let button = document.getElementById("Button1")

let amount = Number(prompt("Enter your loan amount"))

let down = Number(prompt("Enter the down payment as a percentage ie. 10% = 10")) /100


let remainder = amount - (amount * down)

let years = confirm("OK for 15 months Cancel for 30 months")

if (years === true){
    years = 15
}
else {
    years = 30
}

let months = years * 12


let interest = Number(.045)
let prettyInterest = 4.5

let monthly = (((interest / 12) * remainder)/(1- Math.pow(1 + (interest / 12), (years * -12)))).toFixed(2)
console.log(monthly)

let balance = remainder
let interestPaid 
let principalPaid 
let newBalance 

let p1 = document.createElement("p")
document.body.appendChild(p1)
p1.textContent = `Mortgage term: ${years} years`

let p2 = document.createElement("p")
document.body.appendChild(p2)
p2.textContent = `Mortgage rate: ${prettyInterest}%`


for (let i = 1; i <= 360; i++){
    interestPaid = balance * (interest /12)
    principalPaid = monthly - interestPaid
    balance = (balance - principalPaid).toFixed(2)
    if (balance <= 0){
        balance = 0
    }
    if (i === 1 || i === 24 || i === 48 || i === 72 || i === 96 || i === 180 || i === 360){
        console.log(balance)
    }
}



