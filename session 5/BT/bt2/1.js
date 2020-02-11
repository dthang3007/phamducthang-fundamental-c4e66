let Quizz=[
    {
        Name:"Ai thong minh nhat",
        Q1:"Thor",
        Q2:"Hulk",
        Q3:"Banner",
        Q4:"Steve",
        anSwer:3
    },
    {
        Name:"Nghe danh moi cua Jack:",
        Q1:"j97",
        Q2:"j98",
        Q3:"b52",
        Q4:"L00",
        anSwer:1
    },
    {
        Name:"Name of Father of God",
        Q1:"Holme",
        Q2:"Hulk",
        Q3:"Banner",
        Q4:"Michael Corleone.",
        anSwer:4
    }
]

let userInput
let Random
let temp=0
while(Quizz.length!=0){
Random=Math.floor(Math.random()*Quizz.length)
userInput=prompt(`${Quizz[Random].Name}\n1.${Quizz[Random].Q1}\n2.${Quizz[Random].Q2} \n3.${Quizz[Random].Q3}\n4.${Quizz[Random].Q4}`)
if(userInput==Quizz[Random].anSwer){
    alert("Dung")
    temp+=1
}
else{
    alert("sai")
}
Quizz.splice(Random,1)}
alert("Hết câu hỏi r bạn êi!!")
alert(`Bạn trả lời đc ${temp} câu đúng}`)