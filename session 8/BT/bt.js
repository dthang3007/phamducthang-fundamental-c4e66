let Save={
    data:null
}
const getApi=async()=>{
    let a=await fetch("http://dummy.restapiexample.com/api/v1/employees")
    console.log(a)
    let Data =await a.json()
    Save.data=Data.data
};
const Render=async()=>{
    await getApi()
    let temp=Save.data
    console.log(temp)
    let Root=document.getElementById("root")
    console.dir(Root)
    temp.forEach((value,index) => {
        let t=
        `<div id='employeeSalary-${index+1}'>
        <li>Id: ${value.id}; Name: ${value.employee_name} </li>
        <li class="unview">${value.employee_salary} </li>
        </div>`
        Root.innerHTML+=t
    });
}

const Event=async()=>{
    await Render()
    for(let i=0;i<Save.data.length;i++){
        let temp=document.getElementById(`employeeSalary-${i+1}`)
        console.dir(document.getElementById(`employeeSalary-${i+1}`)    )  
        temp.addEventListener('mouseover', () => {
            temp.children[1].classList.toggle('view')       
        })
    }
    
    }
Event()

