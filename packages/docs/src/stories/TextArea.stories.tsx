import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui-emidio/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    value: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, asperiores consectetur nam itaque quia quibusdam odit quisquam deleniti sunt temporibus pariatur rem eligendi maxime earum nulla nostrum! Reiciendis, ducimus ab!',
    disabled: true,
  },
}