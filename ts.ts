interface Mountain{
    name:string;
    height:number;
}

let m : Mountain = {name:"Everest", height:29000};

let range : Mountain[] = [
    {name:"Everest", height:29029},
    {name:"Kilimanjaro", height:19341},
    {name:"Denali", height:20310}
];

function findNameOfTallestMountain(set:Mountain[]):string{
    let current : number = 0;
    let highest : string = "blank";
    
    for(let i = 0; i < set.length; i++){
        
        if(set[i].height > current){
            current = set[i].height;
            highest = set[i].name;
        }
        
    }
    
    return highest;
}
let theMountain : string = findNameOfTallestMountain(range);
console.log(theMountain);


interface Product{
    name:string;
    price:number;
}

let products : Product[] = [
    {name:"motor", price:10},
    {name:"sensor", price:12.50},
    {name:"LED", price:1.00}
];

function calcAverageProductPrice(currentProducts:Product[]):number{
    let total : number = 0;
    for(let i = 0; i < currentProducts.length; i++){
        total += currentProducts[i].price;
    }
    let avg : number = total/currentProducts.length;
    return avg;
}
let avgPrice : number = calcAverageProductPrice(products);
console.log(avgPrice);

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory : InventoryItem[] = [
    {product:products[0], quantity: 10},
    {product:products[1], quantity: 4},
    {product:products[2], quantity: 20}
]


function calcInventoryValue(set:InventoryItem[]):number{
    let total : number = 0;
    for(let i = 0; i < set.length; i++){
        total += set[i].product.price * set[i].quantity;
    }
    return total;
}
let value : number = calcInventoryValue(inventory);
console.log(value);