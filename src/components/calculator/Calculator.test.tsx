import { expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('Sumar por medio de la calculadora funciona', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('2', { selector: 'button' }))
  fireEvent.click(getByText('+', { selector: 'button' }))
  fireEvent.click(getByText('3', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))

  expect(getByText('5', { selector: '.display' })).toBeTruthy()
})

test('Realizar opearciones combinadas por medio de la calculadora', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('2', { selector: 'button' }))
  fireEvent.click(getByText('+', { selector: 'button' }))
  fireEvent.click(getByText('1', { selector: 'button' }))
  fireEvent.click(getByText('0', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))
  fireEvent.click(getByText('-', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))
  fireEvent.click(getByText('x', { selector: 'button' }))
  fireEvent.click(getByText('4', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))

  expect(getByText('16', { selector: '.display' })).toBeTruthy()
})

test('Obtener ERROR si se obtiene un número mayor a 999,999,999', () => {
  const { getByText } = render(<Calculator />)

  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('8', { selector: 'button' }))
  fireEvent.click(getByText('x', { selector: 'button' }))
  fireEvent.click(getByText('2', { selector: 'button' }))
  fireEvent.click(getByText('=', { selector: 'button' }))

  expect(getByText('ERROR', { selector: '.display' })).toBeTruthy()
})
