const inventory = [

    {
    
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand:'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },]
    
let inventoryByBrand = {}
for(let i=0;i<inventory.length;i++){
    const c=inventory[i]
    if(inventoryByBrand[c.brand]){
        inventoryByBrand[c.brand].push(c)
    }
    else{
        inventoryByBrand[c.brand]=[ ]
        inventoryByBrand[c.brand].push(c)
    }
   
}
console.log(inventoryByBrand);
let userInput=prompt("Which brand")
let b=inventoryByBrand[userInput]
let temp=[]
for(let i=0;i<b.length;i++){
    temp.push(b[i].name)

}

let p=0
for(let i=0;i<b.length;i++){
    p=p+(b[i].price*b[i].quantity)
}
alert(`ở trong kho còn ${b.length} máy loại ${userInput}\n ${temp}\n tổng các máy có giá ${p}`)