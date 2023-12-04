interface ThemeColors {
  [key: string]: string | ThemeColors;
}

interface Theme {
  colors: {
    [key: string]: ThemeColors;
  };
}

const theme: Theme = {
  colors: {
    primary: {
      100: 'var(--primary-100)',
      80: 'var(--primary-80)',
      60: 'var(--primary-60)',
      40: 'var(--primary-40)',
      20: 'var(--primary-20)',
      10: 'var(--primary-10)',
      4: 'var(--primary-4)',
    },
    green: {
      100: 'var(--green-100)',
      80: 'var(--green-80)',
      60: 'var(--green-60)',
      40: 'var(--green-40)',
      20: 'var(--green-20)',
      10: 'var(--green-10)',
      4: 'var(--green-4)',
    },
    yellow: {
      100: 'var(--yellow-100)',
      80: 'var(--yellow-80)',
      60: 'var(--yellow-60)',
      40: 'var(--yellow-40)',
      20: 'var(--yellow-20)',
      10: 'var(--yellow-10)',
      4: 'var(--yellow-4)',
    },
    red: {
      100: 'var(--red-100)',
      80: 'var(--red-80)',
      60: 'var(--red-60)',
      40: 'var(--red-40)',
      20: 'var(--red-20)',
      10: 'var(--red-10)',
      4: 'var(--red-4)',
    },
    dark: {
      100: 'var(--dark-100)',
      80: 'var(--dark-80)',
      60: 'var(--dark-60)',
      40: 'var(--dark-40)',
      20: 'var(--dark-20)',
      10: 'var(--dark-10)',
      4: 'var(--dark-4)',
    },
    white: {
      100: 'var(--white-100)',
      80: 'var(--white-80)',
      60: 'var(--white-60)',
      40: 'var(--white-40)',
      20: 'var(--white-20)',
      10: 'var(--white-10)',
      4: 'var(--white-4)',
    },
  },
};

export default theme;
export type { ThemeColors }; 
