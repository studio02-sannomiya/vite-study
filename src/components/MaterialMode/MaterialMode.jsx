import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { useState } from "react"
import MaterialBasic from "../MaterialBasic/MaterialBasic";
import MaterialDrawer from "../MaterialDrawer/MaterialDrawer";
import MaterialGrid from "../MaterialGrid/MaterialGrid";

export default function MaterialMode() {
    const [mode, setMode] = useState('light');
    const toggleMode = () => setMode(prev =>
        prev === 'light' ? 'dark' : 'light'
    );

    const theme = createTheme({
        palette: {
            mode,

            ...(mode === 'light'

                ? {
                    primary: amber,
                }

                : {
                    primary: {
                        main: grey[500],
                        contrastText: '#fff'
                    },
                    background: {
                        default: grey[900],
                        paper: grey[900],
                    }
                }
            )
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" onClick={toggleMode}>
                Mode{mode}
            </Button>
            <MaterialBasic />
            <MaterialDrawer />
            <MaterialGrid />
        </ThemeProvider>
    )
}
