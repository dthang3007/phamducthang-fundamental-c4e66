const get_even_list=(l)=>{
    let evenNumber=l.filter(function(l){
        return ((l+2)%2)==0
    })
    return evenNumber
}
console.log(get_even_list([1,2,3,4]))