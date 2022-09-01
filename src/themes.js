import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    text: "#000"
};

export const darkTheme = {
    body: "#000",
    text: "#fff",
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text}
    }
        
    .card {
        background-color: ${props => props.theme.body};
        border: 2px solid ${props => props.theme.text};
    }

    .myButton {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        border: 2px solid ${props => props.theme.text};

        
    }

    'myButton:hover' {
        background-color: ${props => props.theme.body};
    }

    

`;