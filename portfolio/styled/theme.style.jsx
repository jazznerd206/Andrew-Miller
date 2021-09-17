import React from "react";
import { ThemeProvider } from "styled-components";

const Theme = ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

export const theme = {
    one: {
        bg: 'black',
        bgi: '',
        color: 'white',
        colorAccent: 'grey',
        colorDeco: 'silver',
        fsTitle: '3em',
        fsSubTitle: '2em',
        fsRegular: '1em',
        fsAccent: '1.5em',
    }
}