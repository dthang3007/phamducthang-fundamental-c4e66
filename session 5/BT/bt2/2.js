
// let q1=['Hulk','Banner','Thor',"Steve"]
// let q2=['J97','J98','B52','L00']
let Random
Random=Math.floor(Math.random()*2)
let userInput
if(Random==0){
    userInput=prompt("Ai thong minh nhat:\n1. Hulk\n2. Banner\n3. Thor\n4. Steve")
}
else if(Random==1){
    userInput=prompt("Nghe danh moi cua Jack:\n1. J97\n2. J98\n3. B52\n4. L00")
}
if(Random==0){
if(userInput==2){
    alert("Dung")
}
else{
    alert("sai")
}}
else if(Random==1){
    if(userInput==1){
        alert("Dung")
    }
    else{
        alert("sai")
}}
let temp=prompt(`${Quizz[Random].Name}\n1.${Quizz[Random].Q1}\n2.${Quizz[Random].Q2} \n3.${Quizz[Random].Q3}\n4.${Quizz[Random].Q4}`)