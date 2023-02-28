import { TotalCartStyle } from "../../styles/totalCartStyle"

export const TotalCart = ({currentSale, setCurrentSale}) => {

    if(currentSale.length){
        return <TotalCartStyle>
            <div>
                <p>Total</p>
                <span>
                {
                'R$ ' + currentSale.reduce((acc, current) => acc + current.price , 0).toFixed(2)
                }
                </span>
            </div>
            <button
            className='btn2' 
            onClick={() => setCurrentSale([])}>Remover Todos</button>
        </TotalCartStyle>
    } else {
        return ''
    }
}