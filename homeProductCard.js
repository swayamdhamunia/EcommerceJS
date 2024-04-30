//import { homeQuantityToggle } from "./homeQuantityToggle";

//here product container is the id of html div before template to access the html
const productContainer=document.querySelector("#productContainer");
//here productTemplate is variable that store the template in html that have class or id productTemplate
const productTemplate=document.querySelector("#productTemplate");
export const showProductContainer = (products) => {
    if(!products){
        return false;
    }
     
    products.forEach((curElem)=>
    {   
        const { brand , category , description , id , image , name , price , stock}=curElem;
       
        const productClone = document.importNode(productTemplate.content,true);
        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector('.productName').textContent=name;
        productClone.querySelector('.productDescription').textContent=description;
        productClone.querySelector('.productPrice').textContent="₹"+price;
        productClone.querySelector('.productStock').textContent=stock;
        productClone.querySelector('.category').textContent=category;
        
        //productClone.querySelector('.productImage').src=image;
        /*productClone.querySelector(".stockElement").addEventListener("click",(evnet)=>{
            //homeQuantityToggle(event,id,stock);
        } );*/
        
        productContainer.append(productClone);
        console.log(description);
    
    });
};
