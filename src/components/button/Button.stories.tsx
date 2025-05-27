import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Calculator/Button',
  tags: ['autodocs'],
  args: {
    label: '7',
    onClick: () => alert('Ha hecho click en: 7'),
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Number: Story = {}

export const Operation: Story = {
  args: {
    label: '+',
    onClick: () => alert('Ha hecho click en: +'),
  },
}

export const Equals: Story = {
  args: {
    label: '=',
    onClick: () => alert('Ha hecho click en: ='),
  },
}

