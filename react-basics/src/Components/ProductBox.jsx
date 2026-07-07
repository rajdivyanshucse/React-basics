import Product from "./Product";
function ProductBox(){
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "centre",
        alignItems: "centre",
    };
    return(
        <div style ={styles}>

        <Product title="Logitech MX Master 35" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics" idx={2}/>
        <Product title="Potronics Toad 23" idx={3}/>
        </div>
    )
}
export default ProductBox;