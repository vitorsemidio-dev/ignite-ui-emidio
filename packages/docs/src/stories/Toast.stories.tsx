import type { Meta, StoryObj } from '@storybook/react'
import { ToastDemo, ToastProps } from '@ignite-ui-emidio/react'

export default {
  title: 'Overlay/Toast',
  component: ToastDemo,
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Children: StoryObj<ToastProps> = {
  args: {
    children: <button>Abrir</button>,
    toastTitle: 'Agendamento Realizado',
    toastDescription: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}
