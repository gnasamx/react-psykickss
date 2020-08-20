// @flow
import React, {Fragment} from 'react'
import {
  BaseButton,
  ButtonText,
  SpinnerWrapper,
  Space,
  IconWrapper,
} from './styles'
import type {ButtonPropsT} from './types'
import {getSharedProps} from './utils'
import Spinner from '../Spinner'

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
  } = props
  const sharedProps = getSharedProps(props)

  return (
    <BaseButton
      type="button"
      variant={variant}
      size={size}
      fluid={fluid}
      disabled={disabled}
      isLoading={isLoading}
    >
      <SpinnerWrapper isLoading={isLoading}>
        <Spinner color="#fff" />
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
