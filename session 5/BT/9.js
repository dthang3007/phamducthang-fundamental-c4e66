const get_even_list=(l)=>{
    let evenNumber=l.filter(function(l){
        return ((l+2)%2)==0
    })
    return evenNumber
}
even_list = get_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
    console.log("Your function is correct")}
else{
    console.log("Ooops, bugs detected")}
