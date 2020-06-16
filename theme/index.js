// HEX OPACITY {RGBA val} === {HEX val} -> value must be in the end of HEX string.
// 0.05 === 80,
// 0.08 === cc,
// 0.15 === 26,
// 0.1 === 1a,
// 0.2 === 33,
// 0.3 === 4d,
// 0.4 === 66,
// 0.5 === 0d,
// 0.7 === b3,
// 0.8 === cc

const colors = {
  orange: '#F59708',
  darkOrange: '#F06000',
  white: '#ffffff',
  white05: '#ffffff80',
  white07: '#ffffffb3',
  darkGray: '#464646',
  gray: '#737373',
  lightGray: '#DADADA',
  black: '#000000',
  black03: '#0000004d',
  black01: '#0000001a',
  black05: '#00000080',
  black08: '#000000cc',
  black005: '#0000000d',
  black015: '#00000026',
  transparent: 'transparent',
  boxShadow: '0 1px 5px 0px rgba(0, 0, 0, 0.08)',
  boxShadow03: '0 1px 5px 0px rgba(0, 0, 0, 0.3)',
  bgShadowGradient: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 50%,rgba(0,0,0,0.8) 100%)',
  bgShadowGradient20: 'linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0) 80%,rgba(0,0,0,0.8) 100%)',
};

const fontFamily = 'AvertaStdPE-Regular, AvertaStdPE, Roboto, Helvetica, sans-serif';

const shadows = {
  formInputDefault: 'none',
};

export default {
  colors,
  shadows,
  fontFamily,
  form: {
    label: {
      main: {
        p: '5px 0',
        fontSize: 14,
        requiredStarColor: 'red', // TODO: with design
        color: colors.darkBlue,
      },
    },
    // NOTE: from Styles API on react-select (https://react-select.com/styles)
    reactSelect: {
      main: {
        control: {
          width: '280px',
          marginBottom: '20px',
          backgroundColor: colors.white,
          borderColor: colors.middleGray,
          border: `1px solid ${colors.middleGray}`,
          '&:hover': {
            borderColor: colors.middleGray,
          },
        },
        input: {
          color: colors.darkBlue,
        },
        singleValue: {
          color: colors.darkBlue,
        },
      },
    },
    input: {
      main: {
        px: '10px',
        mb: '20px',
        width: '280px',
        height: '40px',
        bg: colors.white,
        borderRadius: '4px',
        color: colors.darkBlue,
        border: `1px solid ${colors.middleGray}`,
      },
      authPages: {
        px: '10px',
        mb: '20px',
        width: '280px',
        height: '40px',
        bg: colors.white,
        borderRadius: '2px',
        color: colors.darkBlue,
        border: `1px solid ${colors.middleGray}`,
      },
      focusBoxShadow: shadows.formInputDefault,
    },
  },
};
