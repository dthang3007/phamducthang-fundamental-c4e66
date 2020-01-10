let Products=[
    {
        Name: "Xiaomi portable charger 20000mah",
        Brand:'Xiaomi',
        Price :428,
        Color :'White',
        Category:'Charger',
    },
    {
        Name: "VSmart Active 1",
        Brand:'VSmart',
        Price :5487,
        Color :'Black',
        Category:'Phone',

    },
    {
        Name: "IPhone X",
        Brand:'Apple',
        Price :21490,
        Color :'Gray',
        Category:'Phone',

    },
    {
        Name: "Samsung Galaxy A9",      
        Brand:'Samsung',
        Price :8490,
        Color :'Blue',
        Category:'Phone',

    },
]

 

for(let i=0;i<Products.length;i++){
    console.log(`#${i+1}.${Products[i].Name}\nPrice:${Products[i].Price}\n`)
}
let userInput=Number(prompt("Enter product position"))
let temp=Products[userInput-1]
for (let x in temp) {
    console.log(`--------\n${x}:${temp[x]}`);
    }
let userCategory=prompt("Enter your Category")
for(let i=0;i<Products.length;i++){
    if(Products[i].Category==userCategory){
        console.log(`--------------\n${Products[i].Name}\nPrice:${Products[i].Price}\n`)
    }
}
let temp1='provider'
Products[0][temp1]='Phukienzero\nDientuccc'
Products[1][temp1]='Tgdd\nDdghn\nVhStore'
Products[2][temp1]='Tgdd'
Products[3][temp1]='Tgdd'
console.log(Products)

    








