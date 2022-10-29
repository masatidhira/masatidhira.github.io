import { createGlobalStyle } from "styled-components";
import montserratMedium from "./fonts/Montserrat/Montserrat-Medium.ttf";
import montserratReguler from "./fonts/Montserrat/Montserrat-Regular.ttf";
import brushFlower from "./fonts/Brush-Flower/Brush-Flower.otf";
import itRemark from "./fonts/lt-remark/LT-Remark-Bold-Italic.otf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "MontserratMedium";
        src: local("MontserratMedium"), url(${montserratMedium}) format("truetype");
    }

    @font-face {
        font-family: "MontserratReguler";
        src: local("MontserratReguler"), url(${montserratReguler}) format("truetype");
    }

    @font-face {
        font-family: "BrushFlower";
        src: local("BrushFlower"), url(${brushFlower}) format("opentype");
        font-weight: light;
    }

    @font-face {
        font-family: "ItRemark";
        src: local("ItRemark"), url(${itRemark}) format("opentype");
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --background-color: #111111;
        --text-color-1: #EEEEEE;
        --nav-margin: 7vw;

        --font-heading: "ItRemark", serif;
        --font-text-medium: "MontserratMedium", sans-serif;
        --font-text-reguler: "MontserratReguler", sans-serif;
        --font-latin: "BrushFlower", sans-serif;

        --fs-reguler: 13px;
        --fs-medium: 1.8rem;

        --z-index-noise: 1;
        --z-index-content: 2;
        --z-index-nav: 100;
    }

    a {
        text-decoration: none;
        color: var(--text-color-1);
    }

    #root {
        background: var(--background-color);
        max-width: 100%;
        color: var(--text-color-1);
    }

    .active-nav {
        ::before {
            width: 130%;
        }
    }
`;

export default GlobalStyle;
