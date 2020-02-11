let list=['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team']
let countList={

}
for(let i=0;i<list.length;i++){
    const c=list[i]
    console.log(c)
    if(countList[c]){
        countList[c]++
    }
    else{
        countList[c]=1
    }
}
console.log(countList)