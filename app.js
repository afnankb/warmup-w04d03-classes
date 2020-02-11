// Your code is here... 


class Shop {

    
constructor(name, count=0, products=[]){
     this.products = products;
    this.name= name;
    this.id = Math.random()*100;
    this.count = count;

}


addProduct (name , price , stock=1){
    this.products[this.count++] = {name: name, price: price, stock: stock};

}

sale (num){
for (let i=0; i< this.products.length; i++)
{
    this.products[i].price * (num/100);
    console.log(this.products[i].name +' is now ' + this.products[i].price);
}

}


stock()
{
    for (let i=0; i< this.products.length; i++)
{
    console.log(this.products[i].name +' has ' + this.products[i].stock + 'in stock');
}
}


purchase(name, amount)
{
    for (let i=0; i< this.products.length; i++)
    {
        if(this.products[i].name === name ){
            this.products[i].stock -= amount;
            console.log(this.products[i].name +' purchased , New stock is now  ' + this.products[i].stock);
        }


    }
}

showProduct()
{


    for (let i=0; i< this.products.length; i++)
    {
         console.log(this.products[i].name + ' ' + this.products[i].price + ' '+ this.products[i].stock);


    }


}

removeProduct(name)
{
    for (let i=0; i< this.products.length; i++)
    {
        if(this.products[i].name === name ){
           this.products.splice(i,1);
           console.log(this.products[i].name + ' has been removed from product ' );
           }


    }
}


}



shop = new Shop("Supermarket")
shop.addProduct("Apples", 10, 5)
shop.addProduct("Bananas", 6, 2)
shop.addProduct("Apples", 10)

shop.sale(50)

shop.showProduct()
shop.purchase("Bananas",1)

shop.stock("Bananas")

shop.removeProduct("Bananas")
shop.showProduct()