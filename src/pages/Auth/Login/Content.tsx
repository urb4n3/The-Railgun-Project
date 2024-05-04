
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {Typography, Link} from '@mui/material';


import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

import { SitemarkIcon } from '../Theme/CustomIcons';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'FORUM AAA',
    description:
      'A forum you can finally shitpost on!',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Durability',
    description:
      'Lol, not really.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Do whatever you want',
    description:
      'Like i fucking give a shit.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'AI',
    description:
      'Yep, AI. You read that right',
  },
];

export default function Content() {
  return (
    <Stack
      flexDirection="column"
      alignSelf="center"
      gap={4}
      sx={{
        maxWidth: 450,
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Link href="/">
          <SitemarkIcon />
          </Link>
      </Box>
      {items.map((item) => (
        <Stack direction="row" gap={2}>
          {item.icon}
          <div>
            <Typography fontWeight="medium" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
