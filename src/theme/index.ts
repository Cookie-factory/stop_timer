import {extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    blue: {
      3: '#5D4FF4',
    },
    gray: {
      0: '#FFFFFF',
      2: '#CECECE',
      3: '#939393',
      4: '#555555',
      5: '#121212',
    },
    red: {
      3: '#EA3323',
    },
  },
});

const {colors} = theme;

export {colors, theme};
