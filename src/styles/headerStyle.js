import styled from "styled-components";

export const StyledHeader = styled.header`

    text-align: center;

    div {
        border: 2px solid #E0E0E0;
        border-radius: 8px;
        display: flex;
        margin: auto;
        width: 80%;
        max-width: 420px;
    }

    img {
        padding: 15px;
    }

    input {
        width: 70%;
    }

    button {
        height: 80%;
        margin: 5px 10px;
    }

    .searchResults {
        margin: 10px 15px;
        border: unset;
        p {
           color: #828282;
        }
    }

    .cleanSearch {
        display: none;
    }


    @media (min-width: 860px) {
        
        display: flex;
        padding-top: 10px;

        div {
            margin-right: 100px;
            width: 80%;
        }

        img {
            margin-left: 100px;
        }

        .searchResults {
            position: absolute;
            display: flex;
            justify-content: space-between;
            left: 100px;
            top: 7%;
        }

        .cleanSearch {
            display: inherit;
        }
    }
`