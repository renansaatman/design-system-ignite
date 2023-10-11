import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quis quod dolorem. Cum, sunt magni. Accusantium consequuntur, commodi, totam labore ab laborum officiis saepe aliquam, ipsam a reprehenderit nulla doloremque!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
