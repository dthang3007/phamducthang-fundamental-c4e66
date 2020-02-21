context={
    data: null
}
const getData=async()=>{
    let api= await fetch('https://reqres.in/api/users?page=2&fbclid=IwAR3fXUhE8AxyhCYbrdAZ2pQ2N7IOkBkS7WmV5DYIUNJeyeuRLhYGawfmG-A')
    console.log(api)
    let data=await api.json()
    context.data=data.data
    console.log(context.data)

}
getData()
// const ViewData=async()=>{
//     await getData()
//     let temp=context.data
//     console.log(context.data)
//     let Name=document.getElementById("root")
//     console.dir(Name)
//     console.dir(Name)
//     let a=document.getElementsByClassName("a")
//     for(let i=0;i<temp.length;i++){
//         let html=
//         `<div class="a">
        
//         <li>Email:${temp[i].email}</li>
//         <li>Name:${temp[i].first_name}</li>
//         </div>`
//         Name.innerHTML+=html
   
       
//     }
//     console.log(a)
//     console.log(temp.length)
//     console.log(a.length)
// }

// const showdetailInfo= async()=>{
//     await ViewData()
// }
// showdetailInfo()