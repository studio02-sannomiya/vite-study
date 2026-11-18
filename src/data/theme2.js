//theme.js
import { createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

export function createModeTheme(mode) {
    return createTheme({
        palette: {
            mode,

            ...(mode === 'light'
                ? {
                    // ライトモード
                    primary: amber,
                }
                : {
                    // ダークモード
                    primary: {
                        main: grey[500],
                        contrastText: '#fff',
                    },
                    background: {
                        default: grey[900],
                        paper: grey[900],
                    },
                }),
        },
    });
}
