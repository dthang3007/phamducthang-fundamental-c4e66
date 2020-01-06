let userInput=prompt("Nhập dãy số cách nhau bởi dấu , :")
let temp=userInput.split(",")
let A = temp.filter(item => {
    return item % 2 != 0
   })
alert(`${userInput} => ${A}`)