//MaterialModeButton.jsx
import { Button } from '@mui/material';

export default function MaterialModeButton({ mode, onToggle }) {
    return (
        <Button variant="contained" onClick={onToggle}>
            Mode {mode}
        </Button>
    );
}
