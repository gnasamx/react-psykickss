// @flow
import * as React from 'react'
import {Variant, IconPosition, Size, Target, State} from './constants'

export type ButtonPropsT = {
  autoFocus?: boolean,
  children?: React$Node,
  disabled?: boolean,
  download?: boolean,
  fluid?: boolean,
  href?: string,
  icon?: React.Node,
  iconPosition?: $Values<typeof IconPosition>,
  id?: string,
  input?: boolean,
  isLoading?: boolean,
  name?: string,
  noWrap?: boolean,
  onClick?: (SyntheticEvent<HTMLButtonElement>) => mixed,
  size?: $Values<typeof Size>,
  target?: $Values<typeof Target>,
  type?: 'submit' | 'reset' | 'button',
  value?: string,
  variant?: $Values<typeof Variant>,
}

export type SharedStylePropsT = {
  variant?: $Values<typeof Variant>,
  iconPosition?: $Values<typeof IconPosition>,
  size?: $Values<typeof Size>,
  target?: $Values<typeof Target>,
  isLoading?: boolean,
  disabled?: boolean,
  fluid?: boolean,
  iconPosition?: $Values<typeof IconPosition>,
  state?: $Values<typeof State>,
  theme?: any | mixed,
}

export type ApplyPropertyStyleT = {
  property: string,
  variant: $Values<typeof Variant>,
  state: $Values<typeof State>,
  theme: any,
}
