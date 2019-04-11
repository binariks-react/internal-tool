export const getColor = (color, props) => (
  props ? props.theme.colors[color] : ({ theme }) => theme.colors[color]
);

export const getActiveColor = (color, props) => (
  props ? props.theme.colors.activeColors[color] : ({ theme }) => theme.colors.activeColors[color]
);

export const getHoverColor = (color, props) => (
  props ? props.theme.colors.hoverColors[color] : ({ theme }) => theme.colors.hoverColors[color]
);

export const getHoverShadowColor = (color, props) => (
  props ? props.theme.shadows.hover[color] : ({ theme }) => theme.shadows.hover[color]
);

export const getFocusShadowColor = (color, props) => (
  props ? props.theme.shadows.focus[color] : ({ theme }) => theme.shadows.focus[color]
);

export default {
  colors: {
    text: '#5a6169',
    lightGrey: '#e9ecef',
    darkGrey: '#becad6',
    border: '#e1e5eb',
    primary: '#007bff',
    secondary: '#5a6169',
    success: '#17c671',
    danger: '#c4183c',
    warning: '#ffb400',
    info: '#00b8d8',
    dark: '#212529',
    white: '#ffffff',
    royalBlue: '#674eec',
    java: '#1adba2',
    salmon: '#ff4169',
    hoverColors: {
      lightGrey: '#e9ecef',
      primary: '#006fe6',
      secondary: '#4e545b',
      success: '#14af64',
      danger: '#ad1535',
      warning: '#e6a200',
      info: '#00a2bf',
      dark: '#16181b',
      white: '#ffffff',
      royalBlue: '#5337ea',
      java: '#17c491',
      salmon: '#ff2855',
    },
    activeColors: {
      primary: '#0062cc',
      secondary: '#42484e',
      lightGrey: '#FBFBFB',
      success: '#129857',
      danger: '#97122e',
      warning: '#cc9000',
      info: '#008da5',
      dark: '#0a0c0d',
      white: '#007bff',
      royalBlue: '#3f20e7',
      java: '#15ad80',
      salmon: '#ff0e41',
    },
  },
  shadows: {
    hover: {
      primary: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(0,123,255,.25)',
      secondary: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(90,97,105,.25)',
      success: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(23,198,113,.25)',
      danger: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(196,24,60,.25)',
      warning: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(255,180,0,.25)',
      info: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(0,184,216,.25)',
      dark: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(33,37,41,.25)',
      white: '0 0.125rem 0.625rem rgba(129,142,163,.2), 0 0.0625rem 0.125rem rgba(129,142,164,.3)',
      royalBlue: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(103,78,236,.25)',
      java: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(26,219,162,.25)',
      salmon: '0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba(255,65,105,.25)',
      inset: 'inset 0 3px 5px rgba(0,0,0,.125)!important',
    },
    focus: {
      primary: '0 0 0 3px rgba(0,123,255,.15),0 3px 15px rgba(0,123,255,.2),0 2px 5px rgba(0,0,0,.1)',
      secondary: '0 0 0 3px rgba(90,97,105,.15),0 3px 15px rgba(90,97,105,.2),0 2px 5px rgba(0,0,0,.1)',
      success: '0 0 0 3px rgba(23,198,113,.15),0 3px 15px rgba(23,198,113,.2),0 2px 5px rgba(0,0,0,.1)',
      danger: '0 0 0 3px rgba(196,24,60,.15),0 3px 15px rgba(196,24,60,.2),0 2px 5px rgba(0,0,0,.1)',
      warning: '0 0 0 3px rgba(255,180,0,.15),0 3px 15px rgba(255,180,0,.2),0 2px 5px rgba(0,0,0,.1)',
      info: '0 0 0 3px rgba(0,184,216,.15),0 3px 15px rgba(0,184,216,.2),0 2px 5px rgba(0,0,0,.1)',
      dark: '0 0 0 3px rgba(33,37,41,.15),0 3px 15px rgba(33,37,41,.2),0 2px 5px rgba(0,0,0,.1)',
      white: '0 0 0 3px rgba(251,251,251,.15),0 3px 15px rgba(251,251,251,.2),0 2px 5px rgba(0,0,0,.1)',
      royalBlue: '0 0 0 3px rgba(103,78,236,.15),0 3px 15px rgba(103,78,236,.2),0 2px 5px rgba(0,0,0,.1)',
      java: '0 0 0 3px rgba(26,219,162,.15),0 3px 15px rgba(26,219,162,.2),0 2px 5px rgba(0,0,0,.1)',
      salmon: '0 0 0 3px rgba(255,65,105,.15),0 3px 15px rgba(255,65,105,.2),0 2px 5px rgba(0,0,0,.1)',
      switch: '0 3px 8px 1px rgba(0,0,0,.2)',
    },
  },
};
