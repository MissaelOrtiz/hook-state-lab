/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SimpsonQuote from './SimpsonQuoteFn';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json([{ quote: 'Hewwo', character: 'technowizard', image: 'https://cdn.discordapp.com/attachments/870470157275910204/878433227294003240/20160813_221901.jpg' }])
      );
    }
  )
);

describe('SimpsonQuote', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a button that grabs a quote', async () => {
    render(<SimpsonQuote />);

    const button = screen.getByRole('button', { name: 'quote-button' });
    fireEvent.click(button);

    return waitFor(() => {
      screen.getByText('Hewwo - technowizard');
    });
  });
});
