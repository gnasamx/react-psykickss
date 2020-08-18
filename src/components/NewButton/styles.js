// @flow
import styled from 'styled-components'
import {IconPosition, Size, Variant} from './constants'
import type {SharedStylePropsT} from './types.js'
import type {ComponentType} from 'react'

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

const getVariantStyles = ({variant, theme}) => {
  switch (variant) {
    case Variant.Primary:
      return {
        color: theme.colors.gray00,
        backgroundColor: theme.colors.pink60,
        borderColor: theme.colors.pink60,
        ':hover': {
          backgroundColor: theme.colors.pink70,
          borderColor: theme.colors.pink70,
        },
        ':active': {
          boxShadow: `${theme.colors.gray00} 0px 0px 0px 2px, ${theme.colors.pink20} 0px 0px 0px 4px`,
          backgroundColor: theme.colors.pink70,
        },
        ':focus': {
          outlineStyle: 'auto',
          outlineWidth: theme.sizing.scale100,
        },
      }
    case Variant.Secondary:
      return {
        color: theme.colors.gray100,
        backgroundColor: theme.colors.gray00,
        borderColor: theme.colors.gray40,
        ':hover': {
          backgroundColor: theme.colors.gray10,
          borderColor: theme.colors.gray50,
        },
        ':active': {
          boxShadow: `${theme.colors.gray00} 0px 0px 0px 2px, ${theme.colors.gray40} 0px 0px 0px 4px`,
          backgroundColor: theme.colors.gray10,
        },
        ':focus': {
          outlineStyle: 'auto',
          outlineWidth: theme.sizing.scale100,
        },
      }
    case Variant.Outline:
      return {
        color: theme.colors.pink60,
        backgroundColor: theme.colors.gray00,
        borderColor: theme.colors.pink60,
        ':hover': {
          backgroundColor: theme.colors.pink00,
          borderColor: theme.colors.pink70,
        },
        ':active': {
          boxShadow: `${theme.colors.gray00} 0px 0px 0px 2px, ${theme.colors.pink20} 0px 0px 0px 4px`,
          backgroundColor: theme.colors.pink00,
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
    transitionProperty: 'box-shadow',
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
