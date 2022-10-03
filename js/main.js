let productNameInput =document.getElementById("productNameInput");
let productPriceInput = document.getElementById ("productPriceInput");
let productCatogryInput = document.getElementById ("productCatogryInput");
let productDisInput = document.getElementById("productDisInput");

// console.log(productDisInput)
let  productList;

if (localStorage.getItem("theProducts")==null){
    productList  =[];

} else {
    productList= JSON.parse(localStorage.getItem("theProducts")) ;
    displayProduct();
}



function addProduct (){
    
let product = {
    Name:productNameInput.value,
    Price: productPriceInput.value,
    Catogry:productCatogryInput.value,
    Dis:productDisInput.value
};
productList.push(product);
displayProduct();
localStorage.setItem("theProducts",JSON.stringify(productList));
clearForm ()

} ;
function displayProduct(){
    let cont = "";
    for (let i =0; i< productList.length ;i++){
        cont+=`<tr>
        <td>${i+1}</td>
        <td>${productList[i].Name}</td>
        <td>${productList[i].Price}</td>
        <td>${productList[i].Catogry}</td>
        <td>${productList[i].Dis}</td>
        <td><button class="btn btn-info">update</button></td>
        <td><button onclick=" delProduct(${i}) " class="btn btn-danger">delet</button></td>
    </tr>`
    }
document.getElementById("tbod").innerHTML=cont

}
function clearForm (){
    productNameInput.value="";
    productPriceInput.value="";
    productCatogryInput.value="";
    productDisInput.value = ""


}
function delProduct(i){
    productList.splice(i,1);
    localStorage.setItem("theProducts",JSON.stringify(productList));
    displayProduct();
}