// @flow
import type {ComponentType} from 'react'
import styled from 'styled-components'

import {IconPosition, Size, Variant, State} from './constants'
import type {SharedStylePropsT} from './types.js'
import {applyPropertyStyle} from './utils'

const getPaddingStyles = ({size, theme}) => {
  switch (size) {
    case Size.Sm:
      return `${theme.sizing.scale200} ${theme.sizing.scale550}`
    case Size.Md:
      return `${theme.sizing.scale300} ${theme.sizing.scale650}`
    case Size.Lg:
      return `${theme.sizing.scale400} ${theme.sizing.scale750}`
    default:
      Object.freeze({})
  }
}

const getFontStyles = ({size, theme}) => {
  return size === Size.Sm
    ? theme.typography.font1460018
    : theme.typography.font1660020
}

const getBackgroundStyles = props => {
  return applyPropertyStyle({property: 'background', ...props})
}

const getBorderStyles = props => {
  return applyPropertyStyle({property: 'border', ...props})
}

const getColorStyles = props => {
  return applyPropertyStyle({property: 'color', ...props})
}

const getBoxShadowStyles = props => {
  return applyPropertyStyle({property: 'boxShadow', ...props})
}

const getVariantStyles = ({variant, theme}) => {
  switch (variant) {
    case Variant.Primary:
      return {
        color: getColorStyles({
          variant: Variant.Primary,
          theme,
          state: State.Default,
        }),
        backgroundColor: getBackgroundStyles({
          variant: Variant.Primary,
          theme,
          state: State.Default,
        }),
        borderColor: getBorderStyles({
          variant: Variant.Primary,
          theme,
          state: State.Default,
        }),
        ':hover': {
          backgroundColor: getBackgroundStyles({
            variant: Variant.Primary,
            theme,
            state: State.Hover,
          }),
          borderColor: getBorderStyles({
            variant: Variant.Primary,
            theme,
            state: State.Hover,
          }),
        },
        ':active': {
          boxShadow: getBoxShadowStyles({
            variant: Variant.Primary,
            theme,
            state: State.Active,
          }),
          backgroundColor: getBackgroundStyles({
            variant: Variant.Primary,
            theme,
            state: State.Active,
          }),
          borderColor: getBorderStyles({
            variant: Variant.Primary,
            theme,
            state: State.Active,
          }),
        },
        ':focus': {
          outlineStyle: 'auto',
          outlineWidth: theme.sizing.scale100,
        },
      }
    case Variant.Secondary:
      return {
        color: getColorStyles({
          variant: Variant.Secondary,
          theme,
          state: State.Default,
        }),
        backgroundColor: getBackgroundStyles({
          variant: Variant.Secondary,
          theme,
          state: State.Default,
        }),
        borderColor: getBorderStyles({
          variant: Variant.Secondary,
          theme,
          state: State.Default,
        }),
        ':hover': {
          backgroundColor: getBackgroundStyles({
            variant: Variant.Secondary,
            theme,
            state: State.Hover,
          }),
          borderColor: getBorderStyles({
            variant: Variant.Secondary,
            theme,
            state: State.Hover,
          }),
        },
        ':active': {
          boxShadow: getBoxShadowStyles({
            variant: Variant.Secondary,
            theme,
            state: State.Active,
          }),
          backgroundColor: getBackgroundStyles({
            variant: Variant.Secondary,
            theme,
            state: State.Active,
          }),
          borderColor: getBorderStyles({
            variant: Variant.Secondary,
            theme,
            state: State.Active,
          }),
        },
        ':focus': {
          outlineStyle: 'auto',
          outlineWidth: theme.sizing.scale100,
        },
      }
    case Variant.Outline:
      return {
        color: getColorStyles({
          variant: Variant.Outline,
          theme,
          state: State.Default,
        }),
        backgroundColor: theme.colors.gray00,
        borderColor: getBorderStyles({
          variant: Variant.Outline,
          theme,
          state: State.Default,
        }),
        ':hover': {
          backgroundColor: theme.colors.pink00,
          borderColor: getBorderStyles({
            variant: Variant.Outline,
            theme,
            state: State.Hover,
          }),
        },
        ':active': {
          boxShadow: getBoxShadowStyles({
            variant: Variant.Outline,
            theme,
            state: State.Active,
          }),
          backgroundColor: theme.colors.pink00,
          borderColor: getBorderStyles({
            variant: Variant.Outline,
            theme,
            state: State.Active,
          }),
        },
        ':focus': {
          outlineStyle: 'auto',
          outlineWidth: theme.sizing.scale100,
        },
      }
    case Variant.Light:
      return {
        color: getColorStyles({
          variant: Variant.Light,
          theme,
          state: State.Default,
        }),
        backgroundColor: getBackgroundStyles({
          variant: Variant.Light,
          theme,
          state: State.Default,
        }),
        borderColor: getBorderStyles({
          variant: Variant.Light,
          theme,
          state: State.Default,
        }),
        ':hover': {
          backgroundColor: getBackgroundStyles({
            variant: Variant.Light,
            theme,
            state: State.Hover,
          }),
          borderColor: getBorderStyles({
            variant: Variant.Light,
            theme,
            state: State.Hover,
          }),
        },
        ':active': {
          boxShadow: getBoxShadowStyles({
            variant: Variant.Light,
            theme,
            state: State.Active,
          }),
          backgroundColor: getBackgroundStyles({
            variant: Variant.Light,
            theme,
            state: State.Active,
          }),
          borderColor: getBorderStyles({
            variant: Variant.Light,
            theme,
            state: State.Active,
          }),
        },
        ':focus': {
          outlineStyle: 'auto',
          outlineWidth: theme.sizing.scale100,
        },
      }
    default:
      return Object.freeze({})
  }
}

export const BaseButton: ComponentType<SharedStylePropsT> = styled.button(
  ({size, fluid, variant, theme}) => ({
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    position: 'relative',
    width: fluid ? '100%' : 'auto',
    borderRadius: theme.sizing.scale4800,
    padding: getPaddingStyles({size, theme}),
    textDecoration: 'none',
    outline: 'none',
    transition: 'all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s',
    ...getVariantStyles({variant, theme}),
  }),
)

export const ButtonText = styled.div(
  ({isLoading, size, iconPosition, theme}) => ({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    visibility: isLoading ? 'hidden' : 'visible',
    flexDirection: iconPosition === IconPosition.Left ? 'row-reverse' : 'row',
    ...getFontStyles({size, theme}),
  }),
)

export const SpinnerWrapper = styled.div(({isLoading}) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: '2000',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  display: !isLoading ? 'none' : 'flex',
}))

export const Space = styled.div`
  height: 1px;
  width: 0.5rem;
`
export const IconWrapper = styled.div`
  align-self: center;
  align-items: center;
  display: inline-flex;
  cursor: unset;
  vertical-align: unset;
  height: unset;
  width: unset;
`

export const IconSpan = styled.span`
  height: 24px;
  width: 24px;
`
