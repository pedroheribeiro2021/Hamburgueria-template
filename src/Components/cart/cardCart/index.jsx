import { CardCardStyle } from '../../../styles/cardCartStyle'

export const CardCart = ({products, currentSale, setCurrentSale, id}) => {

    const removeProductFromCart = (id) => {
        const itemToCart = currentSale.filter((item) => item.id !== id)
        setCurrentSale(itemToCart)
    }

    return (
        <CardCardStyle>
            <img src={products.img} alt="" />
            <div>
                <h3> {products.name} </h3>
                <p> {products.category} </p>
            </div>
            <span 
            onClick={(event) => event.preventDefault(removeProductFromCart(id))} 
            >Remover</span>
        </CardCardStyle>
    )
}