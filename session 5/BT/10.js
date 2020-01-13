let check=(x,y)=>{
    if((y[2]==0)&&(y[3]==0)){
        if(x[0]<=y[0]&&x[1]<=y[1]){
        return true
    }else{
        return false
    }}
    else{
    if((x[0]>=y[0])&&(x[0]<=(y[0]+y[2]))&&(x[1]>=y[1])&&(x[1]<=(y[1]+y[3]))){
        return true
    }else{
        return false
    }
}}
console.log(check([10,50],[140,60,0,0]))