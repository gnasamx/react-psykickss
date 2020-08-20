// @flow
import React, {Fragment, useContext} from 'react'
import {
  BaseButton,
  ButtonText,
  SpinnerWrapper,
  Space,
  IconWrapper,
} from './styles'
import type {ButtonPropsT} from './types'
import Spinner from '../Spinner'
import {getColorStyles} from './styles'
import {State} from './constants'
import {ThemeContext} from 'styled-components'

export default function Button(props: ButtonPropsT) {
  const {
    isLoading,
    fluid,
    size,
    disabled,
    iconPosition,
    variant,
    children,
    icon,
    as,
    href,
  } = props

  const theme = useContext(ThemeContext)
  const spinnerAccentColor = getColorStyles({
    variant,
    theme,
    state: State.Default,
  })

  return (
    <BaseButton
      type="button"
      variant={variant}
      size={size}
      fluid={fluid}
      disabled={disabled}
      isLoading={isLoading}
      as={as}
      href={href}
    >
      <SpinnerWrapper isLoading={isLoading}>
        <Spinner color={spinnerAccentColor} />
      </SpinnerWrapper>
      <ButtonText isLoading={isLoading} iconPosition={iconPosition}>
        <span>{children}</span>
        {!disabled && icon && (
          <Fragment>
            {children && <Space />}
            <IconWrapper>{icon}</IconWrapper>
          </Fragment>
        )}
      </ButtonText>
    </BaseButton>
  )
}
