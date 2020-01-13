const remove_dollar_sign=(str)=>{ 
    temp=str.replace(/\$/g,"")
    return temp
}
console.log(remove_dollar_sign("$abc"))


