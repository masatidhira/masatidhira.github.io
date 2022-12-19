import { createGlobalStyle } from "styled-components";
import montserratMedium from "./fonts/Montserrat/Montserrat-Medium.ttf";
import montserratReguler from "./fonts/Montserrat/Montserrat-Regular.ttf";
import brushFlower from "./fonts/Brush-Flower/Brush-Flower.otf";
import extraordinair from "./fonts/extraordinair/ExtraordinaireDemoItalic.ttf";

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
        font-family: "Extraordinair";
        src: local("Extraordinair"), url(${extraordinair}) format("truetype");
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

        --font-heading: "Extraordinair", serif;
        --font-text-medium: "MontserratMedium", sans-serif;
        --font-text-reguler: "MontserratReguler", sans-serif;
        --font-latin: "BrushFlower", sans-serif;

        --fs-reguler: 0.8rem;
        --fs-medium: 1.4rem;

        --z-index-noise: 10;
        --z-index-content: 1;
        --z-index-nav: 100;
    }

    li {
        list-style: none;
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
