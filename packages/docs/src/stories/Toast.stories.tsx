import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@renan-ignite-ui/react'
import { useState } from 'react'

function DemoToast(props: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Try me
      </Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Overlay/Toast',
  component: DemoToast,
  args: {
    title: 'Toast open',
    description: 'This is a Toast',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$20',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
