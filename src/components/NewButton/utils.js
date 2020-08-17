// @flow
import type {ButtonPropsT} from './types.js'

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
