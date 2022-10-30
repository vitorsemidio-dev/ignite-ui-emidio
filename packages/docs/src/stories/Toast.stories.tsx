import type { Meta, StoryObj } from '@storybook/react'
import {
  ToastDemo,
  ToastProps,
  StyledProvider,
  StyledToastRoot,
  StyledViewport,
  StyledClose,
  StyledTitle,
  StyledDescription,
  Button,
  Text,
  Heading,
} from '@ignite-ui-emidio/react'
import { colors } from '@ignite-ui-emidio/tokens'
import * as React from 'react'

import { X } from 'phosphor-react'

export default {
  title: 'Overlay/Toast',
  component: ToastDemo,
} as Meta<ToastProps>

const Open: StoryObj<ToastProps> = {
  args: {
    children: <Button>Abrir</Button>,
    toastTitle: (
      <Heading as={'h6'} size={'sm'}>
        Agendamento Realizado
      </Heading>
    ),
    toastDescription: (
      <Text
        as={'span'}
        size={'sm'}
        css={{
          color: colors.gray200,
        }}
      >
        Quarta-feira, 23 de Outubro às 16h
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    toastTitle: {
      control: {
        type: null,
      },
    },
    toastDescription: {
      control: {
        type: null,
      },
    },
  },
}

export const FromDialog = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <StyledProvider>
      <Button onClick={() => setOpen(!open)}>Abrir</Button>

      <StyledToastRoot open={open} onOpenChange={setOpen}>
        <StyledTitle>Título</StyledTitle>
        <StyledDescription>There was an error</StyledDescription>
        <StyledClose asChild>
          <X weight="bold" cursor={'pointer'} color={'#FFF'} width={20} />
        </StyledClose>
      </StyledToastRoot>

      <StyledViewport />
    </StyledProvider>
  )
}
