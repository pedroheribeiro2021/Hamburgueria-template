import { TotalCart } from "../totalCart"
import { CardCart } from "./cardCart"
import { CartStyle } from "../../styles/cartStyle"


export const Cart = ({listProducts, currentSale, setCurrentSale}) => {

    return (
        < CartStyle>
            <h2>Carrinho de compras</h2>
            {
                currentSale.length ? (
                    <ul>
                        {
                            currentSale.map((item, i) => {
                            return < CardCart 
                            products={item} 
                            listProducts={listProducts}
                            currentSale={currentSale} 
                            setCurrentSale={setCurrentSale} 
                            id={item.id} 
                            key={i} /> 
                            })
                        }
                    </ul>
                        ) : (
                            <div>
                                <h3>Sua sacola está vazia</h3>
                                <span>Adicione itens</span>
                            </div>
                            )
            }
            < TotalCart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </CartStyle>
    )
}