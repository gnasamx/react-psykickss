// @flow
import React from 'react'
import * as Styled from './styles'
import type {ButtonPropsT} from './types'
import {getSharedProps} from './utils'

export default function Button(props: ButtonPropsT) {
  const sharedProps = getSharedProps(props)
  
  return (
    <Styled.Button {...sharedProps}>
      {props.children}
      <Styled.Space />
      {props.icon}
    </Styled.Button>
  )
}
