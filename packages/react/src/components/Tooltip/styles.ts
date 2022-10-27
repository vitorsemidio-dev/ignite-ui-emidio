import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipRoot = styled(TooltipPrimitive.Root, {})

export const StyledTrigger = styled(TooltipPrimitive.Trigger, {})

export const StyledContent = styled(TooltipPrimitive.Content, {
  padding: '$3 $4',
  borderRadius: '$md',
  backgroundColor: '$gray900',
  border: 'none',
})

export const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2',
})
