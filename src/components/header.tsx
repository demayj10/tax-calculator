import React, { FC } from 'react';
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';

import './header.css';

const Header: FC = () => (
  <AppBar
    position="relative"
    id="app-header"
  >
    <Toolbar>
      <IconButton
        size="small"
        edge="start"
        aria-label="calculator"
      >
        <CalculateIcon />
      </IconButton>
      <Typography variant="h6">
        Income Tax Calculator
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
