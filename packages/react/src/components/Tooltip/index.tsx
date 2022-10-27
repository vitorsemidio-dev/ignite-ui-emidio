import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import {
  StyledArrow,
  StyledContent,
  StyledTrigger,
  TooltipRoot,
} from './styles'

export interface TooltipTriggerProps
  extends ComponentProps<typeof StyledTrigger> {
  children: ReactNode
}

export function TooltipTrigger({ children, ...props }: TooltipTriggerProps) {
  return (
    <StyledTrigger asChild {...props}>
      {children}
    </StyledTrigger>
  )
}

export interface TooltipContentProps
  extends ComponentProps<typeof StyledContent> {
  children: ReactNode
}

export function TooltipContent({ children, ...props }: TooltipContentProps) {
  return (
    <StyledContent align="center" {...props}>
      {children}
      <StyledArrow />
    </StyledContent>
  )
}

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipRoot {...props}>{children}</TooltipRoot>
    </TooltipPrimitive.Provider>
  )
}
