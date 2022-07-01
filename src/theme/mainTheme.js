import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#0f7575'
        },
        secondary: {
            main: '#0a3333'
        },
        error: {
            main: red.A400
        }
    }
})