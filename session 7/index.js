// let p=document.getElementById('text')
// console.dir(p)
// console.log(p.innerText)
// let number=document.getElementsByClassName('number')
// console.log(number)
// let button=document.getElementById("push")
// button.addEventListener('click', ()=>{
//     console.log("click e roi do")
// })

let menu=document.getElementById('menu')
let userInput=document.getElementById('user-input')
let button=document.getElementById("button")
let del=document.getElementById("delete")
console.dir(userInput)
console.dir(button)
console.dir(menu)
button.addEventListener('click',()=>{
    console.dir(userInput.value)
    console.dir(menu)
    menu.innerHTML+=`<li>${userInput.value}</li>`
    userInput.value=''
})

del.addEventListener('click',()=>{
    for(let i=0;i<menu.children.length;i++){
        if(userInput.value==menu.children[i].innerText){
            menu.removeChild(menu.children[i])
        }
    }
    
})