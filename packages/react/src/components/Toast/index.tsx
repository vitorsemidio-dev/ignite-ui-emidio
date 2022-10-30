import { ComponentProps, ReactNode, useState } from 'react'
import { X } from 'phosphor-react'

import {
  StyledViewport,
  StyledToastRoot,
  StyledTitle,
  StyledDescription,
  StyledProvider,
  StyledClose,
} from './styles'

export {
  StyledProvider,
  StyledToastRoot,
  StyledTitle,
  StyledDescription,
  StyledClose,
  StyledViewport,
}

export interface ToastRootPropst
  extends ComponentProps<typeof StyledToastRoot> {}

export interface ToastProps extends ComponentProps<typeof StyledProvider> {
  toastTitle: string | ReactNode
  toastDescription: string | ReactNode
}

export const ToastDemo = ({
  toastDescription,
  toastTitle,
  children,
  ...props
}: ToastProps) => {
  // const [open, setOpen] = useState(true)

  return (
    <>
      {children}

      {/* <StyledToastRoot open={open} onOpenChange={setOpen}>
        <StyledTitle asChild={typeof toastTitle !== 'string'}>
          {toastTitle}
        </StyledTitle>
        <StyledDescription asChild={typeof toastDescription !== 'string'}>
          {toastDescription}
        </StyledDescription>

        <StyledClose asChild>
          <X weight="bold" cursor={'pointer'} color={'#FFF'} width={20} />
        </StyledClose>
      </StyledToastRoot> */}
      {/* <StyledViewport /> */}
    </>
  )
}
