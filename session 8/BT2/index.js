// let Cong=document.getElementById("cong")
// let Tru=document.getElementById("tru")
// let Key=document.getElementById("key")
// let Start=document.getElementById('start')
// let Stop=document.getElementById('stop')
// console.dir(Key)
// // let temp=0
// // Cong.addEventListener('click',()=>{
// //     temp+=1
// //     Key.innerText=temp
// // })
// // Tru.addEventListener('click',()=>{
// //     temp-=1
// //     Key.innerText=temp
// // })
// Number(Key.value)

// function temp(){
//     a=setInterval(() => {
//         Key.value-=1 
//      },1000 )
   
// }
// Start.addEventListener('click',()=>{
//      console.log("hihi")
//     temp();
    
// })
// Stop.addEventListener('click',()=>{
//     clearInterval(a)
    

// })
// let textQuote=document.getElementById('quote')
// let Author=document.getElementById('author')
// let Reload=document.getElementById('reload')
// let Root=document.getElementById('root')
// const Random= async()=>{
//     let getquotes= await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')
//     let temp= await getquotes.json()    
//     console.log(temp)
//     Reload.addEventListener("click",()=>{
//         Root.innerHTML = ''
//         let quoteRandom = temp[Math.floor(Math.random()*temp.length)]
//         let a=
//         `<span id="quote">${quoteRandom.quoteText}</span>
//         <span id="author">${quoteRandom.quoteAuthor}</span>`
//         Root.innerHTML+=a

//     })
// }
// Random()
let timeSheetData=[
    {
        Project:"Learn front end",
        Task:"Learn Html",
        Timespent:6,
    },
    {
        Project:"Learn front end",
        Task:"Learn Css",
        Timespent:8,
    },
    {
        Project:"Learn front end",
        Task:"Learn JS",
        Timespent:6,
    },
    {
        Project:"Learn git",
        Task:"Learn Git basics",
        Timespent:2,
    },
]
let userInput={
    Project:null,
    Task:null,
    Timespent:null,
}
console.log(timeSheetData)
let tbody=document.getElementById("ts_body")
console.dir(tbody)
let Projectinput=document.getElementById("project")
let Task=document.getElementById('task')
let Timespent=document.getElementById('timespent')
let Add=document.getElementById('add_bt')
Add.addEventListener('click',()=>{
    userInput.Project=Projectinput.value;
    userInput.Task=Task.value;
    userInput.Timespent=Timespent.value;
    timeSheetData.push(userInput)
    console.log(userInput)
    console.log(timeSheetData)
})
timeSheetData.forEach((value)=>{
    let temp=
    `<tr>
    <td>${value.Project}</td>
    <td>${value.Task} </td>
    <td>${value.Timespent}</td>
    </tr>`
    tbody.innerHTML+=temp
})




