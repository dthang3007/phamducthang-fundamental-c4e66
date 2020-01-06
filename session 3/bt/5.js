let userInput=prompt("Nhập dãy số cần tính tổng và cách nhau bởi dấu phẩy: ")
let A=userInput.split(",")
console.log(A)
let sum=0
for(let i=0;i<A.length;i++){
    sum+=Number(A[i])
}
alert(sum)