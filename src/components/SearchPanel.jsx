import { useState } from 'react';
import { Alert, Button, Paper, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchPanel() {
  const [keyword, setKeyword] = useState('');
  const [searched, setSearched] = useState('');

  const handleSearch = () => {
    setSearched(keyword.trim());
  };

  return (
    <Paper variant="outlined" sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextField
          label="検索キーワード"
          size="small"
          fullWidth
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          disabled={!keyword.trim()}
          onClick={handleSearch}
        >
          検索
        </Button>
        {searched && <Alert severity="info">入力されたキーワード：{searched}</Alert>}
      </Stack>
    </Paper>
  );
}
