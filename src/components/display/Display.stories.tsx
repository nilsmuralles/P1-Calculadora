import type { Meta, StoryObj } from '@storybook/react'
import Display from './Display'

const meta: Meta<typeof Display> = {
  component: Display,
  title: 'Calculator/Display',
  tags: ['autodocs'],
  args: {
    value: '123456789',
  },
}

export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = {}

export const Error: Story = {
  args: {
    value: 'ERROR',
  },
}

export const Decimal: Story = {
  args: {
    value: '3.14159',
  },
}

