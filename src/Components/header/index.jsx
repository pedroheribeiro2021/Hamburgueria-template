import { StyledHeader } from "../../styles/headerStyle"
import logo from '../../Assets/Mask Group.png'


export const Header = ({setFilter, filter}) => {

    const inputFilter = () => {
        const input = document.querySelector('input')
        const inputValue = input.value

        return inputValue
    }

    return (
        < StyledHeader >
        {
            filter === '' ? (
                <>
                <img src={logo} alt="" />
                <div>
                    <input type="text"
                    placeholder="Digitar Pesquisa"
                    />
                    <button
                    className="btn1"
                    onClick={() => {
                        setFilter(inputFilter)
                    }}
                    >Pesquisar</button>
                </div>
                </>
            ) : (
                <>
                <img src={logo} alt="" />
                <div>
                    <input type="text"
                    placeholder="Digitar Pesquisa"
                    />
                    <button
                    className="btn1"            
                    onClick={() => setFilter(inputFilter)}
                    >Pesquisar</button>
                </div>
                <div className="searchResults">
                    <h2>Resultados para: <p>{filter}</p></h2>
                    <button className="btn1 cleanSearch"
                    onClick={() => 
                        setFilter('')
                        } 
                    >Limpar pesquisa</button>
                </div>
                </>
            )
        }
        </StyledHeader>
    )
}