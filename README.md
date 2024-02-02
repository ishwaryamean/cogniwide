Project Name:Products

description :

- Build a React application that displays a list of products with their prices.
- Implement currency configuration functionality, allowing users to switch between different currencies (USD, EUR, GBP).
- Fetch product data from a provided API endpoint (e.g., [API Endpoint]).
- Use React state management for currency selection and handle conversion appropriately Installation


Important:
  
I did not push the node modules, you have to install 

the run common will be ----> "npm i"

run command  for backend

Since i've used pm2 start 

the run common will be ----> "pm2 start app.js" after that "pm2 logs 0"

run command  for frontend

the run common will be ----> "npm start" 


BACKEND

STEP 1 :

Product APIs

Method : GET http://localhost:8080/product // it will product details

Sample Response :

{
    "status": 200,
    "message": "success",
    "data": [
{
            "id": 1,
            "productName": "Apple",
            "productModel": "iPhone 13 (128GB) - (Product) RED",
            "productImage": "https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY218_.jpg",
            "USD": 70,
            "EUR": 65,
            "GBP": 83,
            "productPrice": 1099.99,
            "productRating": 4.8
        },
        {
            "id": 2,
            "productName": "Redmi",
            "productModel": "A2 (Aqua Blue, 2GB RAM, 64GB Storage)",
            "productImage": "https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UY218_.jpg",
            "USD": 55,
            "EUR": 63,
            "GBP": 85,
            "productPrice": 899.99,
            "productRating": 4.5
        },
         ]
}


FRONTEND

STEP 1 :
  
After run the frontend, the product list will show.

STEP 2:

 users can switch between different currencies (USD, EUR, GBP)  

