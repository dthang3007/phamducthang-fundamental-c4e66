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
timeSheetData.forEach((value,i)=>{
    let temp=
    `<tr>
    <td>${value.Project}</td>
    <td>${value.Task} </td>
    <td>${value.Timespent}</td>
    <td><button id='bt-${i}'>X</button></td>
    </tr>`
    tbody.innerHTML+=temp
})
Add.addEventListener('click',()=>{
    timeSheetData.push({Project:`${Projectinput.value}`,Task:`${Task.value}`,Timespent:`${Timespent.value}`})   
    console.log(timeSheetData)
    console.dir(tbody)
    let temp1=
    `<tr>
    <td>${timeSheetData[timeSheetData.length-1].Project}</td>
    <td>${timeSheetData[timeSheetData.length-1].Task} </td>
    <td>${timeSheetData[timeSheetData.length-1].Timespent}</td>
    <td><button id='bt-${timeSheetData.length-1}'>X</button></td>
    </tr>`
    tbody.innerHTML+=temp1
})

for(let i=0;i<timeSheetData.length;i++){
    let t=document.getElementById(`bt-${i}`)
    t.addEventListener('click',()=>{
        tbody.removeChild(tbody.children[i])
        console.dir(tbody)
    })

}




