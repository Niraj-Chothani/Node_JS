var products = new Array(); 
products = [ 
    {     
        name: "Product1",     
        inventory: 100,     
        unit_price: 100, 
    },   
    {     
        name: "Product2",     
        inventory: 30,     
        unit_price: 200, 
    },   
    {     
        name: "Product3",     
        inventory: 10,     
        unit_price: 600, 
    },   
    {     
        name: "Product4",     
        inventory: 70,     
        unit_price: 450, 
    },   
    { 
      name: "Product5",     
      inventory: 90,     
      unit_price: 600, 
    }, ]; 
    const listProducts = (products) => products.map((product) => product.name); 
    const totalValue = (products) => products.reduce((total, curr) => total + curr.inventory * curr.unit_price, 0); 
    console.log(listProducts(products)); 
    console.log(totalValue(products)); 
  