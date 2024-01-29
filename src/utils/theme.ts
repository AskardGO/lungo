import {createTheme, ThemeOptions} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    fontWeight: 300
                }
            }
        }
    }
});