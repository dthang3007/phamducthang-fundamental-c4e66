clear()
const drawSquare=(x,y)=>{
    for(let i=0;i<4;i++){
    color(y)
    fd(x)
    rt(90)}
}
for (let i = 0; i  < 30; i ++){
drawSquare(i * 5, 'red')
lt(17)
penup()
fd(i * 2)
pendown()
}
