// @flow
import React from 'react'
import * as Styled from './styles'
import type {ButtonPropsT} from './types'
import {getSharedProps} from './utils'

export default function Button(props: ButtonPropsT) {
  console.log('== Button theme: ', props)
  const sharedProps = getSharedProps(props)
  return (
    <Styled.Button {...sharedProps}>
      {props.children}
      {props.icon}
    </Styled.Button>
  )
}
