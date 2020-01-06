let arr=["1",'2','3','4','5']
console.log(arr)
let userInput=prompt("Nhập vào 1 số bất kì: ")
if(arr.includes(userInput)){
    alert(`co trong day va nam o index ${arr.indexOf(userInput)}`)
}else{
    alert("khong co trong day")
}