let button = document.getElementById("Button1")

button.addEventListener("click", loanFunc)

function loanFunc(){
    let amount
    let down

    try{
        amount = Number(prompt("Enter your loan amount"))
        down = Number(prompt("Enter the down payment as a percentage ie. 10% = 10")) /100
        if (isNaN(amount) || isNaN(down)){
            throw new Error("Please enter a number")
        }
        else{
            let remainder = amount - (amount * down)

            let years = confirm("OK for 15 years Cancel for 30 years")
        
            if (years === true){
                years = 15
            }
            else {
                years = 30
            }
        
            let months = years * 12
        
        
            let interest = Number(.0575)
            let prettyInterest = 5.75
        
            let monthly = (((interest / 12) * remainder)/(1- Math.pow(1 + (interest / 12), (years * -12)))).toFixed(2)

            let totalInterest = (monthly * months) - remainder
            console.log(totalInterest)

            let mortgageAmount = remainder + totalInterest
            console.log(mortgageAmount)
        
            let balance = remainder
            let interestPaid 
            let principalPaid 
        
            let p1 = document.createElement("p")
            document.body.appendChild(p1)
            p1.textContent = `Mortgage term: ${years} years`
        
            let p2 = document.createElement("p")
            document.body.appendChild(p2)
            p2.textContent = `Mortgage rate: ${prettyInterest}%`

            let p3 = document.createElement("p")
            document.body.appendChild(p3)
            p3.textContent = `Loan amount after down payment: ${remainder.toFixed(2)}`

            let p4 = document.createElement("p")
            document.body.appendChild(p4)
            p4.textContent = `Loan amount after down payment: ${totalInterest.toFixed(2)}`

            let p5 = document.createElement("p")
            document.body.appendChild(p5)
            p5.textContent = `Loan amount after down payment: ${mortgageAmount.toFixed(2)}`
        
            let br = document.createElement("br")
            document.body.appendChild(br)
        
            for (let i = 1; i <= months; i++){
                interestPaid = balance * (interest /12)
                let p1 = document.createElement("p")
                document.body.appendChild(p1)
                p1.textContent = `Interest paid: $${interestPaid.toFixed(2)}`
        
                principalPaid = monthly - interestPaid
                let p2 = document.createElement("p")
                document.body.appendChild(p2)
                p2.textContent = `Principal paid: $${principalPaid.toFixed(2)}`
        
                balance = (balance - principalPaid).toFixed(2)
                let p3 = document.createElement("p")
                document.body.appendChild(p3)
        
                let br = document.createElement("br")
                document.body.appendChild(br)
        
                if (balance <= 0){
                    balance = (0).toFixed(2)
                }
                p3.textContent = `Balance: $${balance}`
            }
        }
    }
    catch (error){
        window.alert(error.message)
    }
}