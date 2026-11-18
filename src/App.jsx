//app.jsx

import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createModeTheme } from './data/theme2.js';
import MaterialModeButton from './components/MaterialModeButton/MaterialModeButton.jsx';
import MaterialForm from './components/MaterialForm/MaterialForm.jsx';

export default function App() {
  // モードの状態管理
  const [mode, setMode] = useState('light');

  // モードの切り替え
  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // テーマの生成
  const theme = createModeTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MaterialModeButton mode={mode} onToggle={toggleMode} />
      <MaterialForm />

      {/* 他のコンポーネントもここに配置 */}

    </ThemeProvider>
  );
}
