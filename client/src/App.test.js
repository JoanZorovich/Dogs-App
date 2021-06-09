import { render, screen } from '@testing-library/react';
import {Footer} from './components/footer/footer'
import App from './App';

test('El Footer debe mostrar un texto con el nombre del creador"', async () => {
  render(<Footer/>)
  expect(screen.getAllByText('@Zorovich - POWERED BY HENRY')).toHaveLength(1)
})