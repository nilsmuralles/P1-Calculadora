import type { Meta, StoryObj } from '@storybook/react'
import Calculator from './Calculator'

const meta: Meta<typeof Calculator> = {
  component: Calculator,
  title: 'Calculator/Calculator',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Calculator>

export const Default: Story = {}
