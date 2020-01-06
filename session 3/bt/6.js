let userInput=prompt("Nhập dãy số cần tính tổng và cách nhau bởi dấu phẩy: ")
let A=userInput.split(",")
let small=A[0]
for(let i=0;i<A.length;i++){
    if(small>=Number(A[i])){
        small=Number(A[i])
    }}
alert(`Smallest Number is ${small}`)
