console.log("Hello, my name is Duc Thang and here my sheeps size:")
let sizeofSheeps=['30','40','60','80']
console.log(...sizeofSheeps)
let temp
temp=Math.max(...sizeofSheeps)
console.log(`Now my biggest sheep has size ${temp}`)
sizeofSheeps[sizeofSheeps.indexOf(`${temp}`)]='8'
console.log(`After shearing \n${sizeofSheeps}`)
for(let i=1;i<=4;i++){
    for(let j=0;j<sizeofSheeps.length;j++){
        sizeofSheeps[j]=Number(sizeofSheeps[j])+50  
    }
    console.log(`Montn ${i}\ntăng size:\n${sizeofSheeps}`)
    temp=Math.max(...sizeofSheeps)
    console.log(`Now my biggest sheep has size ${temp}`)
    sizeofSheeps[sizeofSheeps.indexOf(temp)]='8'
    console.log(`After shearing \n${sizeofSheeps}`)
}
let sum=0;
for(let i=0;i<sizeofSheeps.length;i++){
    sum+=Number(sizeofSheeps[i])
}
console.log(`My flock has style in total:${sum}`)
let cost=sum*2
console.log(`I would get ${sum}*2$= ${cost}`)


