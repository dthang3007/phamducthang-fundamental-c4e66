// console.log(1)
// setTimeout(()=> {
//     console.log(2)
//     console.log(3)
// },2000)
// const count = async () => {
//     console.log(1)
    
//     console.log(3)
// }

// count()

context = {
    data: null
}

const getData = async () => {
    let api = await fetch('https://reqres.in/api/users?page=2&fbclid=IwAR18BjASmywbbTknVS10WG-TpOeUkfHmT2OajYtwHjNR8wPflKJnrSkDF1g')
    console.log(api)
    let data = await api.json()
    context.data = data.data
    console.log(context.data)
}

// const viewData
const viewData = async () => {

    await getData()
    console.log(context.data)
    let root = document.getElementById('root')
    context.data.forEach((value,i) => {
        let html = `
        <div id = 'user-${i}'>
        <li>Name: ${value.first_name} ${value.last_name}</li>
        <li>Email: ${value.email}</li>
        <img class="unview"  src = "${value.avatar}" ></img>
        </div>
        <br>
        `
        root.innerHTML += html
    })

}



const showDetailInfo = async () => {
    await viewData()
    for(let i = 0; i < context.data.length ; i ++){
        let userInfo = document.getElementById(`user-${i}`)
        console.dir(document.getElementById('user-2'))
        userInfo.addEventListener('mouseover', () => {
            console.log(userInfo.children[2])
            userInfo.children[2].classList.toggle('view')
        })
    }
}

showDetailInfo()
