import type { Meta, StoryObj } from '@storybook/react'
import {
  ToastDemo,
  ToastProps,
  Button,
  Text,
  Heading,
} from '@ignite-ui-emidio/react'
import { colors } from '@ignite-ui-emidio/tokens'

export default {
  title: 'Overlay/Toast',
  component: ToastDemo,
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Open: StoryObj<ToastProps> = {
  args: {
    children: <Button>Abrir</Button>,
    toastTitle: (
      <Heading
        as={'h6'}
        size={'sm'}
        css={{
          color: colors.white,
        }}
      >
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
