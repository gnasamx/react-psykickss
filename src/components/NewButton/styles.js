// @flow
import styled from 'styled-components'
import {IconPosition, Size} from './constants'
import type {SharedStylePropsT} from './types.js'
import type {ComponentType} from 'react'

const getFludityStyles = fluid => {
  return fluid ? '100%' : 'auto'
}

const getIconPosition = iconPosition => {
  return iconPosition === IconPosition.Left ? 'row-reverse' : 'row'
}

const getPaddingStyles = (size, theme) => {
  console.log('== theme: ', theme)
  return size === Size.Sm ? '0.375rem 0.75rem' : '0.625rem 1rem'
}

const getFontStyles = size => {}

export const Button: ComponentType<SharedStylePropsT> = styled.button(
  ({fluid, iconPosition, size, theme}) => ({
    fontWeight: 600,
    borderRadius: '3rem',
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 1.2,
    borderWidth: '1px',
    borderStyle: 'solid',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    transitionProperty: 'box-shadow',
    opacity: 1,
    color: '#ffffff',
    backgroundColor: '#7b20f9',
    borderColor: '#7b20f9',
    outline: 'none',
    width: getFludityStyles(fluid),
    flexDirection: getIconPosition(iconPosition),
    padding: getPaddingStyles({size, theme}),
    fontSize: getFontStyles(size),
  }),
)
