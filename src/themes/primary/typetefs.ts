import React from 'react';
import { Color, PaletteMode } from '@mui/material';
import {
  CommonColors,
  PaletteAugmentColorOptions,
  PaletteColor,
  PaletteTonalOffset,
  TypeAction,
  TypeBackground,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    palette: {
      common: CommonColors;
      mode: PaletteMode;
      contrastThreshold: number;
      tonalOffset: PaletteTonalOffset;
      primary: PaletteColor;
      secondary: PaletteColor;
      error: PaletteColor;
      warning: PaletteColor;
      info: PaletteColor;
      success: PaletteColor;
      grey: Color;
      text: TypeText;
      divider: TypeDivider;
      action: TypeAction;
      background: TypeBackground;
      getContrastText: (background: string) => string;
      augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
    };
  }
}
declare module '@mui/material/styles/createPalette' {
  export interface CommonColors {
    red: string;
    green: string;
    grey: string;
    lightGrey: string;
    greenHover: string;
    purple: string;
    darkGray: string;
    'Dark/Surface/Surface 3': string;
    'Dark/Hover/1': string;
    'Dark/Text/Links': string;
    'Dark/Text/Secondary': string;
    'Dark/Gray/2': string;
    'Dark/Stroke/Stroke 2': string;
    darkGradient: string;
    darkGradientReverse: string;
    'Dark/Primary/1': string;
    'Dark/Primary/2': string;
    'Dark/Primary/0': string;
    'Dark/Text/Disabled': string;
    'Light/Additional/Red 2': string;
    'Light/Additional/Red 3': string;
    'Light/Additional/Yellow 2': string;
    darkBlue: string;
    'Dark/Surface/Surface 2': string;
    linearGradient: string;
    'Dark/Surface/Surface 0.6': string;
    'Dark/Surface/Surface 0.4': string;
    'Dark/Additional/Red 0': string;
  }

  export interface PaletteOptions {
    common?: Partial<CommonColors>;
  }
}

declare module '@mui/material/styles' {
  export interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
  export interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    mobile: true;
    tablet: true;
  }
}

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    title: true;
  }
}
declare module '@mui/material/styles/createMixins' {
  export interface MixinsOptions {}
}
declare module '@mui/material/styles/createMixins' {
  export interface Mixins {}
}
declare module '@mui/material/IconButton' {
  export interface IconButtonPropsColorOverrides {
    grey: true;
  }
}
declare module '@mui/material/Badge' {
  export interface BadgePropsColorOverrides {
    primary: true;
    secondary: true;
    default: true;
    error: true;
    info: true;
    success: true;
    warning: true;
  }
}
declare module '@mui/material/Button' {
  export interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    contained: true;
    outlined: true;
    smallRadius: true;
    circle: true;
    text: true;
  }
  export interface ButtonPropsColorOverrides {
    green: true;
    primary: true;
    secondary: true;
    successDiscount: true;
  }
}
declare module '@mui/material/IconButton' {
  export interface IconButtonPropsColorOverrides {
    inherit: true;
    default: true;
    primary: true;
    secondary: true;
    error: true;
    info: true;
    success: true;
    warning: true;
  }
}
declare module 'notistack' {
  interface VariantOverrides {
    infoSnackbar: true;
  }
}

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'contained'
  | 'smallRadius'
  | 'circle'
  | 'text'
  | 'outlined';

export type ButtonColors =
  | 'green'
  | 'successDiscount'
  | 'secondary'
  | 'primary';

export type IconButtonColors =
  | 'inherit'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export type BadgeColors =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

declare module '@mui/material/styles/createTheme' {
  interface Theme {}
}
