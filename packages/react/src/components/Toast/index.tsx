/* eslint-disable no-unused-vars */
import * as React from 'react'
import { styled, keyframes } from '@stitches/react'
import { violet, blackA, mauve, slate, green } from '@radix-ui/colors'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  StyledViewport,
  StyledToastRoot,
  StyledTitle,
  StyledDescription,
  // StyledAction,
  StyledProvider,
  StyledClose,
} from './styles'

// Exports

// Your app...
// const Box = styled('div', {})
const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    size: {
      small: {
        fontSize: 12,
        padding: '0 10px',
        lineHeight: '25px',
        height: 25,
      },
    },
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: green.green2,
        color: green.green11,
        boxShadow: `inset 0 0 0 1px ${green.green7}`,
        '&:hover': { boxShadow: `inset 0 0 0 1px ${green.green8}` },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green8}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
})

export interface ToastRootPropst
  extends React.ComponentProps<typeof StyledToastRoot> {}

export interface ToastProps
  extends React.ComponentProps<typeof ToastPrimitive.Provider> {
  toastTitle: string | React.ReactNode
  toastDescription: string | React.ReactNode
}

export const ToastDemo = ({
  toastDescription = 'descriptoion',
  toastTitle = 'title',
  children,
  ...props
}: ToastProps) => {
  const [open, setOpen] = React.useState(true)
  const eventDateRef = React.useRef(new Date())
  const timerRef = React.useRef(0)

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <StyledProvider swipeDirection="right">
      {/* Children */}
      {children}
      {/* <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway()
            setOpen(true)
          }, 100)
        }}
      >
        Add to calendar
      </Button> */}

      <StyledToastRoot open={open} onOpenChange={setOpen}>
        <StyledTitle asChild={typeof toastTitle !== 'string'}>
          {toastTitle}
        </StyledTitle>
        <StyledDescription asChild={typeof toastDescription !== 'string'}>
          {toastDescription}
        </StyledDescription>

        <StyledClose asChild>
          <X weight="bold" cursor={'pointer'} color={'#FFF'} />
        </StyledClose>
      </StyledToastRoot>
      <StyledViewport />
    </StyledProvider>
  )
}

// export default ToastDemo
