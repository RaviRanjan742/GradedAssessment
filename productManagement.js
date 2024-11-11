function parseProductData(jsonData) {
    return JSON.parse(jsonData);
  }
  
  function addProduct(products, newProduct) {
    
    if (!newProduct.id || !newProduct.name || !newProduct.category || !newProduct.price || typeof newProduct.available !== 'boolean') {
      return 'Invalid product data';
    }
  
    
    products.push(newProduct);
    return products;
  }
  
  function updateProductPrice(products, productId, newPrice) {
    
    const productIndex = products.findIndex(product => product.id === productId);
    if (productIndex === -1) {
      return 'Product not found';
    }
  
    
    products[productIndex].price = newPrice;
    return products;
  }
  
  function getAvailableProducts(products) {
    return products.filter(product => product.available);
  }
  
  function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
  }
  
  
  const productData = `[
    {
      "id": "prod-001",
      "name": "iPhone 12",
      "category": "Electronics",
      "price": 799.99,
      "available": true
    },
    {
      "id": "prod-002",
      "name": "Nike Air Force 1",
      "category": "Apparel",
      "price": 89.99,
      "available": true
    },
    {
      "id": "prod-003",
      "name": "Macbook Pro",
      "category": "Electronics",
      "price": 1499.99,
      "available": false
    }
  ]`;
  
  const products = parseProductData(productData);
  console.log(products);
  
  const newProduct = {
    id: "prod-004",
    name: "Samsung Galaxy S21",
    category: "Electronics",
    price: 999.99,
    available: true
  };
  
  const updatedProducts = addProduct(products, newProduct);
  console.log(updatedProducts);
  
  const updatedPriceProducts = updateProductPrice(updatedProducts, "prod-001", 849.99);
  console.log(updatedPriceProducts);
  
  const availableProducts = getAvailableProducts(updatedPriceProducts);
  console.log(availableProducts);
  
  const electronicsProducts = getProductsByCategory(updatedPriceProducts, "Electronics");
  console.log(electronicsProducts);