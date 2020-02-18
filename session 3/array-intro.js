// let Hobby=["An","Choi","Ngu"]
// let In1=prompt("Nhap C")
// let In2=prompt("Nhap R")
// let In3=prompt("Nhap U")
// Hobby.push(In1)
// Hobby.forEach((value,index))=>{
//     console.log(index,value)
// }
// if(In3>3){
//     let In4=prompt("Nhap gia tri them")
//     Hobby.push(In4)
// }
// else{
//     let In5=prompt("Nhap gia tri update")

// }
// let Hobby=["An","Choi","Ngu","Truyen"]
//  console.log(Hobby)
// let userInput1=prompt("Vi tri index muon xoa:")
// let userInput2=prompt("So luong muon xoa:")
// Hobby.splice(userInput1-1,userInput2)
// console.log(Hobby)
// let userInput1=prompt("Nhap xoa:")
// for(let i=0;i<=(Hobby.index);i++)
// {
//     if(userInput1==Hobby[i]){
//         Hobby.splice(i,1)
//     }
// }
//  console.log(Hobby.length)

let Shop=["Ao1","Ao2","Ao3","Quan1","Quan2","Quan3"]
let Khaibao=["C","R","U","D","E"]
let userInput=prompt("Nhap vao CRUDE")
if(userInput=="C"){
    let Input=prompt("Nhap du lieu can them:")
    Shop.push(Input)
    console.log(Shop)
}else if(userInput=="R"){
    let Nhap=prompt("A hay O")
    if(Nhap=="A"){
        Shop.forEach(value =>{
            console.log(value)})
        }else if(Nhap=="O"){
            let In=prompt("Nhap index")
            for(let i=0;i<Shop.length;i++){
                if(In==){
                console.log(Shop[i])
            }
        }else{
        console.log("error")
    }}}


