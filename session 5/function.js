// while(true){
// let userInputx=Number(prompt('Nhập số x vào'))
// let userInputy=Number(prompt('Nhập số y vào'))
// let userInputmath=prompt('Nhập vào phép tính')
// let temp
// if(userInputmath=='+'){
//     temp=userInputx+userInputy
// }
// else if(userInputmath=='-'){
//     temp=userInputx-userInputy
// }
// else if(userInputmath=='*'){
//     temp=userInputx*userInputy
// }
// else if(userInputmath=='/'){
//     temp=userInputx/userInputy
// }
// else{
//     alert('Nhập sai phép tính')
// }
// alert(`Phép tính của bạn có kết quả là ${temp}`)
// }

let x=Math.floor(Math.random() * 10)
let y=Math.floor(Math.random() * 10)
let ops=['+','-']
let op=ops[Math.floor(Math.random()*ops.length)]
let errors=[-2,-1,0,1,2]
let errosNumber=errors[Math.floor(Math.random()*errors.length)];
let result
if(op=='+'){
    result=x+y+errosNumber
}else{
    result=x-y+errosNumber
}
alert(`${x}${op}${y}=${result}`)
let userInput=prompt("0or1")
if(result==(result+errosNumber))
{
    if(userInput=='0'){
        alert("sai")
    }
    else{
        alert("dung")
    }
}
else{
    if(userInput=='0'){
        alert("dung")
    }
    else{
        alert("sai")
    }
}
    
