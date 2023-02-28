import styled from "styled-components";

export const ProductListStyle = styled.ul`

    display: flex;
    overflow: auto;
    gap: 20px;
    margin: 30px auto 0;
    width: 95%;


    @media (min-width: 860px) {
        
        overflow: unset;
        flex-wrap: wrap;

        margin-left: 100px;
    }

`