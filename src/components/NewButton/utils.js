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
    $disabled: disabled,
    $isLoading: isLoading,
    $iconPosition: iconPosition,
    $fluid: fluid,
    $variant: variant,
    $size: size,
  }
}
