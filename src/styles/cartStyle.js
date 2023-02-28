import styled from "styled-components";

export const CartStyle = styled.div`

    width: 95%;
    margin: 0 auto;
    text-align: center;

    ul {
        height: 260px;
        overflow: auto;
        margin: 5px;
    }

    h2 {
        background-color: var(--color-primary);
        color: white;
        margin: 20px auto 0;
        padding-left: 15px;
        width: 100%;
        height: 65px;
        border-radius: 5px 5px 0px 0px;

        display: flex;
        align-items: center;
    }

    h3 {
        margin: 20px auto;
    }


    @media (min-width: 860px) {
        
        width: 50%;
        margin: 12px 100px 0 0;
    }

`