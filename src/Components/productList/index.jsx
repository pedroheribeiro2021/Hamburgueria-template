import { ProductCard } from "../product"
import { ProductListStyle } from "../../styles/productListStyle"


export const ProductList = ({products, listProducts, currentSale, setCurrentSale, addProductToCart}) => {
    
    return (
        < ProductListStyle >
            {
                products.map((product, i) =>
                    <ProductCard
                    key={i}
                    product={product}
                    listProducts={listProducts}
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                    addProductToCart={addProductToCart}
                    id={product.id}
                    />
                )
            }
        </ProductListStyle>
    )
}