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
  return size === Size.Sm
    ? `${theme.sizing.scale200} ${theme.sizing.scale550}`
    : `${theme.sizing.scale400} ${theme.sizing.scale650}`
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
        color: theme.colors.white,
        backgroundColor: theme.colors.purple500,
        borderColor: theme.colors.purple500,
      }
    case Variant.Secondary:
      return {
        color: theme.colors.black,
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.gray300,
      }
    case Variant.Outline:
      return {
        color: theme.colors.purple500,
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.purple500,
      }
    default:
      return Object.freeze({})
  }
}

export const Button: ComponentType<SharedStylePropsT> = styled.button(
  ({fluid, iconPosition, size, variant, theme}) => ({
    borderRadius: '3rem',
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
`;