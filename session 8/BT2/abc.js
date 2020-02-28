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
let Update=document.getElementById('update_bt')
let Clear=document.getElementById('clear_bt')
viewData()

Add.addEventListener('click',()=>{
    timeSheetData.push({Project:`${Projectinput.value}`,Task:`${Task.value}`,Timespent:`${Timespent.value}`})   
    console.log(timeSheetData)
    console.dir(tbody)
    viewData()
})

function removeLine(i){
    timeSheetData.splice(i,1)
    viewData()
}
function btupdate(i){
    Update.addEventListener("click",()=>{
        timeSheetData[i].Project=Projectinput.value
        timeSheetData[i].Task=Task.value
        timeSheetData[i].Timespent=Timespent.value
        viewData()
    })  
}

function updateLine(i){
    Projectinput.value=timeSheetData[i].Project
    Task.value=timeSheetData[i].Task
    Timespent.value=timeSheetData[i].Timespent
    btupdate(i)
    Update.classList.toggle("view")
    Add.classList.toggle('unview')
    console.dir(Add)
    console.dir(Projectinput)
}
Clear.addEventListener('click',()=>{
    Projectinput.value=''
    Task.value=''
    Timespent.value=''
    Update.classList.toggle("view")
    Add.classList.toggle('unview')
})


function viewData  () {
    tbody.innerHTML = ''
    timeSheetData.forEach((value,i)=>{
        
        let temp=
        `<tr>
        <td>${value.Project}</td>
        <td>${value.Task} </td>
        <td>${value.Timespent}</td>
        <td><button onclick ="removeLine(${i})">X</button>
        <button onclick ="updateLine(${i})">U</button>
        </td>
        </tr>`
        tbody.innerHTML+=temp
    })
}
