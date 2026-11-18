import { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CheckIcon from '@mui/icons-material/Check';

export default function ProfileCard() {
  const [following, setFollowing] = useState(false);

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>
            山
          </Avatar>
          <Stack spacing={0.5}>
            <Typography variant="h6">山田 花子</Typography>
            <Typography variant="body2" color="text.secondary">
              Webデザインを勉強中です。
            </Typography>
            <Chip label="デザイナー" size="small" sx={{ alignSelf: 'flex-start' }} />
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 3, pb: 2 }}>
        <Button
          variant={following ? 'outlined' : 'contained'}
          startIcon={following ? <CheckIcon /> : <PersonAddAlt1Icon />}
          onClick={() => setFollowing(!following)}
        >
          {following ? 'フォロー中' : 'フォローする'}
        </Button>
      </CardActions>
    </Card>
  );
}
