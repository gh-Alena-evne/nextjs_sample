import { ThemeOptions, createTheme } from '@mui/material/styles';
import { breakpoints } from './breakpoints';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiButton } from './components/MuiButton';
import { MuiChip } from './components/MuiChip';
import { MuiContainer } from './components/MuiContainer';
import { MuiDivider } from './components/MuiDivider';
import { MuiIconButton } from './components/MuiIconButton';
import { MuiInputBase } from './components/MuiInputBase';
import { MuiListItem } from './components/MuiListItem';
import { MuiListItemButton } from './components/MuiListItemButton';
import { MuiMenu } from './components/MuiMenu';
import { MuiPaper } from './components/MuiPaper';
import { MuiSvgIcon } from './components/MuiSVGIcon';
import { MuiTab } from './components/MuiTab';
import { MuiTypography } from './components/MuiTypography';
import { mixins } from './mixins';
import { palette } from './palette';

const themeOptions: Partial<ThemeOptions> = {
  mixins,
  breakpoints,
  palette,
  components: {
    ...MuiTypography,
    ...MuiButton,
    ...MuiIconButton,
    ...MuiSvgIcon,
    ...MuiAvatar,
    ...MuiDivider,
    ...MuiListItem,
    ...MuiListItemButton,
    ...MuiInputBase,
    ...MuiChip,
    ...MuiContainer,
    ...MuiTab,
    ...MuiMenu,
    ...MuiPaper,
  },
};

export const theme = createTheme(themeOptions);
