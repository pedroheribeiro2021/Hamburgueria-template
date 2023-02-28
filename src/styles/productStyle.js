import styled from "styled-components";

export const ProductStyle = styled.li`

    padding: 16px;

    min-width: 250px;

    border: 2px solid #E0E0E0;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
        font-size: 18px;
    }

    img {
        height: 150px;
        max-width: 162px;
        margin: 0 auto;
    }

    span {
        font-size: 12px;
        color: #828282;
    }

    p {
        font-size: 14px;
        color: var(--color-primary)
    }

    button {
        width: 85px;
        padding: 10px 0;
    }

    @media (min-width: 860px) {

        img {
            width: 162px;
            height: 162px;
            margin: auto;
        }
    }   

`