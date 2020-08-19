// @flow
import type {ButtonPropsT, ApplyPropertyStyleT} from './types.js'
import {Variant, State} from './constants'

export function getSharedProps({
  disabled,
  isLoading,
  iconPosition,
  fluid,
  variant,
  size,
}: ButtonPropsT) {
  return {
    disabled,
    isLoading,
    iconPosition,
    fluid,
    variant,
    size,
  }
}

export const applyPropertyStyle = ({
  property,
  variant,
  state,
  theme,
}: ApplyPropertyStyleT) => {
  const {
    colors,
    brand: {color},
  } = theme

  const baseTheme = {
    background: {
      [Variant.Primary]: {
        [State.Default]: `${color}60`,
        [State.Active]: `${color}70`,
        [State.Hover]: `${color}70`,
      },
      [Variant.Secondary]: {
        [State.Default]: `${color}10`,
        [State.Active]: `${color}20`,
        [State.Hover]: `${color}20`,
      },
      [Variant.Outline]: {
        [State.Default]: 'gray00',
        [State.Active]: `${color}00`,
        [State.Hover]: `${color}00`,
      },
      [Variant.Light]: {
        [State.Default]: 'gray00',
        [State.Active]: 'gray10',
        [State.Hover]: 'gray10',
      },
    },
    color: {
      [Variant.Primary]: {
        [State.Default]: 'gray00',
      },
      [Variant.Secondary]: {
        [State.Default]: `${color}70`,
      },
      [Variant.Outline]: {
        [State.Default]: `${color}70`,
      },
      [Variant.Light]: {
        [State.Default]: 'gray100',
      },
    },
    border: {
      [Variant.Primary]: {
        [State.Default]: `${color}60`,
        [State.Active]: `${color}70`,
        [State.Hover]: `${color}70`,
      },
      [Variant.Secondary]: {
        [State.Default]: `${color}10`,
        [State.Active]: `${color}20`,
        [State.Hover]: `${color}20`,
      },
      [Variant.Outline]: {
        [State.Default]: `${color}60`,
        [State.Active]: `${color}70`,
        [State.Hover]: `${color}70`,
      },
      [Variant.Light]: {
        [State.Default]: 'gray40',
        [State.Active]: 'gray50',
        [State.Hover]: 'gray50',
      },
    },
    boxShadow: {
      [Variant.Primary]: {
        [State.Active]: `${colors[`${color}00`]} 0px 0px 0px 2px, ${
          colors[`${color}20`]
        } 0px 0px 0px 4px`,
      },
      [Variant.Secondary]: {
        [State.Active]: `${colors[`${color}00`]} 0px 0px 0px 2px, ${
          colors[`${color}20`]
        } 0px 0px 0px 4px`,
      },
      [Variant.Outline]: {
        [State.Active]: `${colors[`${color}00`]} 0px 0px 0px 2px, ${
          colors[`${color}20`]
        } 0px 0px 0px 4px`,
      },
      [Variant.Light]: {
        [State.Active]: `${colors[`${color}00`]} 0px 0px 0px 2px, ${
          colors['gray40']
        } 0px 0px 0px 4px`,
      },
    },
  }

  const propertyStyle = baseTheme[property]
  const appearanceStyle = propertyStyle[variant]
  if (property === 'boxShadow') {
    return appearanceStyle[state]
  } else {
    return colors[appearanceStyle[state]]
  }
}
