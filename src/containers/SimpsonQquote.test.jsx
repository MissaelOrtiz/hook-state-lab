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
        ctx.json([{ text: 'Hewwo', character: 'technowizard', image: 'https://cdn.discordapp.com/attachments/870470157275910204/878433227294003240/20160813_221901.jpg' }])
      );
    }
  )
);
