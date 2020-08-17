// @flow
import React from 'react'
import * as Styled from './styles'
import type {ButtonPropsT} from './types'
import {getSharedProps} from './utils'

export default function OldButton(props: ButtonPropsT) {
  const sharedProps = getSharedProps(props)
  return (
    <Styled.Button {...sharedProps}>
      <span>{props.children}</span>
      <Styled.Space />
      {props.icon}
    </Styled.Button>
  )
}
