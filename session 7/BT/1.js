let Id1=document.getElementById("a")
let Button=document.getElementById("b")
let user=document.getElementById("c")
let Color=document.getElementById("color")
Button.addEventListener('click', ()=>{
    console.dir(Id1)
    console.log(Id1.origin)
    console.dir(user)
    user.value=Id1.origin
    console.dir(Color)
    Color.remove(Color.selectedIndex)
})