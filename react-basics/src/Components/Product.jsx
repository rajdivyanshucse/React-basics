import Price from "./Price";
import "./Product.css";
function Product({title,idx}){
    let oldPrices =["12000","2000","560","299"];
    let newPrices =["10000","1000","500","199"];
    let discription =["8000 DPI","Intutive Surface","disigned of ipad","wireless"];
    return(
        <div className ="Product">
        <h4>{title}</h4>
        <p>{discription[idx]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}
export default Product;