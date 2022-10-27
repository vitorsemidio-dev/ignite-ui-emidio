import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipProps,
  TooltipTrigger,
  TooltipContent,
  Box,
  Text,
  Avatar,
} from '@ignite-ui-emidio/react';

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    open: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            height: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Base: StoryObj<TooltipProps> = {
  args: {
    children: (
      <>
        <TooltipTrigger>
          <Text>Lorem ipsum dolor.</Text>
        </TooltipTrigger>
        <TooltipContent>
          <Text>Eu sou Tooltip content</Text>
        </TooltipContent>
      </>
    ),
  },
};

export const TooltipOpen: StoryObj<TooltipProps> = {
  args: {
    children: (
      <>
        <TooltipTrigger>
          <Text>Eu sou tooltip trigger</Text>
        </TooltipTrigger>
        <TooltipContent>
          <Text>Eu sou Tooltip content</Text>
        </TooltipContent>
      </>
    ),
    open: true,
  },
};

export const WithAvatar: StoryObj<TooltipProps> = {
  args: {
    children: (
      <>
        <TooltipTrigger>
          <Text>Vitor Emídio</Text>
        </TooltipTrigger>
        <TooltipContent>
          <Avatar
            src="https://github.com/vitorsemidio-dev.png"
            alt="Vitor Emidio"
          />
        </TooltipContent>
      </>
    ),
    open: true,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};
