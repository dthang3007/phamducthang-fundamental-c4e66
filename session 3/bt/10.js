let userInput=prompt('Nhập chuỗi tên cách nhau bởi dấu(,):')
let temp1=userInput.split(",")
for(let i=0;i<temp1.length;i++){
    temp1[i]=`<${temp1[i]}>`
}
alert(`${userInput} => ${temp1}`)
