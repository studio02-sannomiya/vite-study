import { useState } from 'react';
import {
  Card,
  CardContent,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export default function SettingsPanel() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <NotificationsOutlinedIcon color="primary" />
          <Typography variant="h6">通知設定</Typography>
        </Stack>
        <FormControlLabel
          control={
            <Switch
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
          }
          label="通知を受け取る"
        />
        <Typography variant="body2" color="text.secondary">
          現在の設定：{enabled ? 'オン' : 'オフ'}
        </Typography>
      </CardContent>
    </Card>
  );
}
