import {} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    btnColor: {
      main: string;
      contrastText: string;
    };
    navbarColor: {
      main: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    btnColor: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    navbarColor: true;
  }
}
