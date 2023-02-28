import toast from "react-hot-toast"
import { ProductStyle } from "../../styles/productStyle"


export const ProductCard = ({product, currentSale, setCurrentSale}) => {

    const addProductToCart = () => {

        const itemToCart = currentSale.find((item) => item.id === product.id)
    
        if(!itemToCart){
            const newProduct = {
                ...product
            }
            setCurrentSale([newProduct, ...currentSale])
        } else {
            toast('Produto já adicionado ao carrinho!')
        }
      }

    return (
        < ProductStyle >
            <img src={product.img} alt="" />
            <h2> {product.name} </h2>
            <span> {product.category} </span>
            <p> {`R$ ${product.price} `} </p>
            <button 
            className="btn1"
            onClick={(event) => event.preventDefault(addProductToCart(product))}
            >Adicionar</button>
        </ProductStyle>
    )
}