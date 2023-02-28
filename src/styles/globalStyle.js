import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    list-style: none;
}

h1 {

}

button {
    cursor: pointer;
    border: none;
    background: transparent;
}

input {
    background: transparent;
    border: none;
}

:root {
    --color-primary: #27AE60;
    --color-primary50: #93D7AF;
    --color-secundary: #EB5757;
    /* gray */
    --gray1: #333333;
    --gray2: #828282;
    --gray3: #E0E0E0;
    --gray4: #F5F5F5;
}

.btn1 {
    background-color: var(--color-primary);
    padding: 11px 20px;
    border-radius: 8px;
    color: white;
}

.btn2 {
    background-color: #E0E0E0;
    color: var(--gray2);
    padding: 0px 20px;
    border-radius: 8px;
    width: 85%;
    height: 60px;
}

.containerPrincipal {

    @media (min-width: 860px) {
        display: flex;
        margin-top: 30px;
    }
}

`