// @flow
import type {ComponentType} from 'react'
import styled from 'styled-components'

import {IconPosition, Size, Variant, State} from './constants'
import type {SharedStylePropsT} from './types.js'
import {applyPropertyStyle} from './utils'

const getFludityStyles = fluid => {
  return fluid ? '100%' : 'auto'
}

const getIconPosition = iconPosition => {
  return iconPosition === IconPosition.Left ? 'row-reverse' : 'row'
}

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

export const Button: ComponentType<SharedStylePropsT> = styled.button(
  ({fluid, iconPosition, size, variant, theme}) => ({
    borderRadius: theme.sizing.scale800,
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'all',
    opacity: 1,
    outline: 'none',
    width: getFludityStyles(fluid),
    flexDirection: getIconPosition(iconPosition),
    padding: getPaddingStyles({size, theme}),
    ...getFontStyles({size, theme}),
    ...getVariantStyles({variant, theme}),
  }),
)

export const Space = styled.div`
  height: 1px;
  width: 0.5rem;
`
