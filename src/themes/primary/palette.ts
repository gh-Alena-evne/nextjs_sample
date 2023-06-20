import { PaletteOptions } from '@mui/material/styles/createPalette';

export const commonColors = {
  white: '#ffffff',
  red: '#FF6565',
  green: '#41CC00',
  greenHover: '#4CAD1F',
  purple: '#5B52E7',
  grey: '#515151',
  lightGrey: '#575975',
  darkGray: '#67717E',
  lightGray: '#9CB3C9',
  'Dark/Text/Secondary': '#9DA4AF',
  'Dark/Surface/Surface 3': '#333041',
  'Dark/Gray/2': '#3D405C',
  'Dark/Text/Links': '#999BFF',
  'Dark/Hover/1': 'rgba(217, 223, 255, 0.1)',
  'Dark/Stroke/Stroke 2': '#282536',
  darkGradient: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
  darkGradientReverse:
    'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%)',
  'Dark/Primary/1': '#5B52E7',
  'Dark/Primary/2': '#999BFF',
  'Dark/Primary/0': '#362EB8',
  'Dark/Text/Disabled': '#67717E',
  'Light/Additional/Red 2': '#FF6666',
  'Light/Additional/Red 3': '#FFCCCC',
  'Light/Additional/Yellow 2': '#FFD466',
  darkBlue: '#00061B',
  'Dark/Surface/Surface 2': 'rgba(40, 37, 54, 0.8)',
  'Dark/Surface/Surface 0.6': 'rgba(0, 0, 0, 0.6)',
  'Dark/Surface/Surface 0.4': 'rgba(0, 0, 0, 0.4)',
  linearGradient:
    'linear-gradient(180deg, #AEB0FF 0%, rgba(200, 201, 255, 0.2) 100%)',
  'Dark/Additional/Red 0': '#AD1F1F',
};

export const palette: PaletteOptions = {
  common: commonColors,
  background: {
    default: '#13111E',
  },
  text: {
    primary: '#fff',
    secondary: '#999BFF',
  },
  error: {
    main: '#FF0000',
  },
  primary: {
    main: commonColors.purple,
    contrastText: commonColors.white,
    light: commonColors.white,
  },
  secondary: {
    main: commonColors.darkGray,
  },
  success: {
    main: commonColors.green,
  },
};
