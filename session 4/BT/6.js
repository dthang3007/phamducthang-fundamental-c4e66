console.log('Hi there, this is your learning task to front-end developer carrer:')
let LearningDeveloper=[{
    Name:'HTML',
    complete:false,
},
{
    Name:'css',
    complete:false,
},
{
    Name:'Basic of JS',
    complete:false,
},
{
    Name:'Note package manager',
    complete:false,
},
{
    Name:'GIT',
    complete:false,
}]
for(let i=0;i<LearningDeveloper.length;i++){
    console.log(`${i+1}.${LearningDeveloper[i].Name}\ncomplete:${LearningDeveloper[i].complete}`)
}
let userInput=prompt("EnterYourcommand")
if(userInput=='new'){
    let userTask=prompt('Enter new task')
    LearningDeveloper.push({'Name':userTask ,'complete':"false"})
    console.log(LearningDeveloper)
}
else if(userInput=='update'){
    let userPoiston=Number(prompt("Enter poiston"))
    let userUpdate=prompt("Enter new title")
    LearningDeveloper[userPoiston-1].Name=userUpdate
    console.log(LearningDeveloper)
}
else if(userInput=='complete'){
    let userPoiston=Number(prompt("Enter poiston"))
    LearningDeveloper[userPoiston-1].complete=true
    console.log(LearningDeveloper)
}
else if(userInput='delete'){
    let userDelete=prompt('Enter delete task')
    for(let i=0;i<LearningDeveloper.length;i++){
        if(LearningDeveloper[i].Name==userDelete){
            delete LearningDeveloper[i]
        }
    }
console.log(LearningDeveloper)
}

