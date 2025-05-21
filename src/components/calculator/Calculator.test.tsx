import { expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('Sumar por medio de la calculadora funciona', () => {
  const { getByText } = render(<Calculator/>)

  fireEvent.click(getByText('2', { selector: 'button' }))
  fireEvent.click(getByText('+', { selector: 'button' }))
  fireEvent.click(getByText('3', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))

  expect(getByText('5', { selector: '.display' })).toBeTruthy()
})
