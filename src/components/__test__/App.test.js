import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import App from '../../App';

test('Renderizza il componente AppBar', () => {
  render(<App/>);

  //AppBar
  const app = screen.getByTestId('appBar');
  expect(app).toBeInTheDocument();

});

