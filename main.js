import './style.css'
import products from "./api/products.json";
import { showProductContainer } from './homeProductCard';


//json object start to show in website console by this line
console.log(products);


//call the function to display all the products as a card for this need a showContainer function that take array of products as input
//showProductContainer is a function name
showProductContainer(products);
