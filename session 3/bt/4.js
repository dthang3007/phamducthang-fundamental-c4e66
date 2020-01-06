let Shop=["Jeans", "Text-Shirt", "Socks"]
for(let i=0;i<100;i++){
    let Welcome=prompt("Hi there, what do you want(C,R,U,D)")
    if(Welcome=="E"){
        alert("ERROR")
    }
    else if(Welcome=="R"){
        Shop.forEach((value, index)=>{
            alert(`${index+1}. ${value}`)
        })
    }
    else if(Welcome=="C"){
        let Creative=prompt("Nhập item mới: ")
        Shop.push(Creative)
        alert("DONE")
        Shop.forEach((value,index)=>{
            alert(`${index+1}. ${value}`)
    })
    }
    else if(Welcome=="U"){
        let userIndex=Number(prompt("Nhập vị trí item update"))
        let userValue=prompt("Nhập item cần update")
        Shop[userIndex-1]=userValue
        Shop.forEach((value,index)=>{
            alert(`${index+1}. ${value}`)})
    }
    else if(Welcome=="D"){
        let Delete=Number(prompt("Nhập vị trí item cần xóa: "))
        Shop.splice(Delete-1,1)
        alert("DONE")
        Shop.forEach((value,index)=>{
            alert(`${index+1}. ${value}`)
        })
    }
}