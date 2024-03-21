let userInput=document.getElementById('userInput')
const buttom=document.querySelector('button')
//const result=document.getElementById('displayResult')
let generated=document.getElementById('generated')
const numberGenerater=function(){
    number=Math.floor(Math.random()*10)
    console.log(number);
    generated.value=number;// if you have to display Your Value on display 
    return number;
}

buttom.addEventListener("click",function(){
        let number=numberGenerater()
        if (userInput.value==number) {
            console.log("You are Lucky");
        } else {
            console.log("Try again");
        }
    
})
