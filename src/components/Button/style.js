import styled from 'styled-components'
import { Button } from 'reactstrap'
import theme from '../../vars/theme'

const buttonPrimary = ({
  backgroundColor,
  hoverBackgroundColor,
  focusBorderColor,
}) => `
  color: white;
  background-color: ${backgroundColor};
  border-color: ${backgroundColor};

  &:hover {
    background-color: ${hoverBackgroundColor};
    border-color: ${hoverBackgroundColor};
  }

  &:focus {
    box-shadow: 0 0 0 2pt ${focusBorderColor};
  }
`

const buttonSecondary = ({
  color,
  borderColor,
  hoverBackgroundColor,
  focusBorderColor,
}) => `
  color: ${color};
  background-color: 'transparent';
  border-color: ${borderColor};

  &:hover {
    color: white;
    background-color: ${hoverBackgroundColor};
    border-color: ${hoverBackgroundColor};
  }

  &:focus {
    border-color: transparent;
    box-shadow: 0 0 0 2pt ${focusBorderColor};
  }
`

const PRIMARY = {
  indigo: {
    color: 'white',
    backgroundColor: theme.indigoMedium1,
    hoverBackgroundColor: theme.indigoDark,
    focusBorderColor: theme.indigoMedium3,
  },
  green: {
    color: 'white',
    backgroundColor: theme.greenMedium1,
    hoverBackgroundColor: theme.greenDark,
    focusBorderColor: theme.greenDark,
  },
}

const SECONDARY = {
  indigo: {
    color: theme.indigoMedium1,
    hoverBackgroundColor: theme.indigoDark,
    focusBorderColor: theme.indigoMedium3,
  },
  green: {
    color: theme.greenMedium1,
    hoverBackgroundColor: theme.greenMedium1,
    focusBorderColor: theme.greenDark,
  },
}

const btnStyles = (context, color) => {
  switch (context) {
    case 'primary':
      return buttonPrimary(PRIMARY[color])
    case 'secondary':
      return buttonSecondary(SECONDARY[color])
    default:
      return buttonPrimary(PRIMARY.indigo)
  }
}

const ButtonWrapper = styled(Button)`
  min-width: 216px;
  text-align: center;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 999px;
  border: 2px solid;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${({ context, color }) => btnStyles(context, color)};
`

export { ButtonWrapper }
