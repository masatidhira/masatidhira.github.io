import { createGlobalStyle } from "styled-components";

const publicUrl = process.env.PUBLIC_URL;
const montserratMedium = publicUrl + "/fonts/Montserrat-Medium.ttf";
const montserratRegular = publicUrl + "/fonts/Montserrat-Regular.ttf";
const brushFlower = publicUrl + "/fonts/Brush-Flower.otf";
const saolDisplay = publicUrl + "/fonts/SaolDisplay-SemiboldItalic.ttf";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "MontserratMedium";
        src: local("MontserratMedium"), url(${montserratMedium}) format("truetype");
    }

    @font-face {
        font-family: "MontserratRegular";
        src: local("MontserratRegular"), url(${montserratRegular}) format("truetype");
    }

    @font-face {
        font-family: "BrushFlower";
        src: local("BrushFlower"), url(${brushFlower}) format("opentype");
        font-weight: light;
    }

    @font-face {
        font-family: "SaolDisplaySemiBoldItalic";
        src: local("SaolDisplaySemiBoldItalic"), url(${saolDisplay}) format("truetype");
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

        --font-heading: "SaolDisplaySemiBoldItalic", serif;
        --font-text-medium: "MontserratMedium", sans-serif;
        --font-text-reguler: "MontserratRegular", sans-serif;
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
