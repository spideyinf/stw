import React from 'react'
import PropTypes from 'prop-types'

import { ButtonWrapper } from './style'

const Button = ({
  className,
  context,
  color,
  type,
  onClick,
  style,
  children,
  ...otherProps
}) => (
  <ButtonWrapper
    className={className}
    context={context}
    color={color}
    type={type}
    style={style}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </ButtonWrapper>
)

Button.displayName = 'Button'

Button.defaultProps = {
  context: 'primary',
  color: 'indigo',
  type: 'button',
  onClick: null,
  style: {},
}

Button.propTypes = {
  /** primary, secondary */
  context: PropTypes.string,
  type: PropTypes.string,
  /** indigo, green */
  color: PropTypes.oneOf(['indigo', 'green']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
}

export default Button
