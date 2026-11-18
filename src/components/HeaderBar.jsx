import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function HeaderBar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <HomeOutlinedIcon />
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
          MUIサンプル
        </Typography>
        <Button color="inherit" href="#profile">
          プロフィール
        </Button>
        <Button color="inherit" href="#faq">
          FAQ
        </Button>
      </Toolbar>
    </AppBar>
  );
}
