import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import TrainerList from "../components/Main/Section7/TrainerList";


describe('TrainerList Component', () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders TrainerList component and fetches trainers', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { id: 1, name: 'Trainer 1', photo: 'photo1.jpg' },
        { id: 2, name: 'Trainer 2', photo: 'photo2.jpg' }
      ],
    });

    render(
      <Router>
        <TrainerList />
      </Router>
    );

    await waitFor(() => expect(screen.getByText('Treenerid')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Trainer 1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Trainer 2')).toBeInTheDocument());
  });

  test('displays error message when fetch fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network response was not ok'));

    render(
      <Router>
        <TrainerList />
      </Router>
    );

    await waitFor(() => expect(screen.getByText('Error: Network response was not ok')).toBeInTheDocument());
  });

  test('renders trainers when fetch succeeds', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        { id: 1, name: 'Trainer 1', photo: 'photo1.jpg' },
        { id: 2, name: 'Trainer 2', photo: 'photo2.jpg' }
      ],
    });

    render(
      <Router>
        <TrainerList />
      </Router>
    );

    await waitFor(() => expect(screen.getByText('Treenerid')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Trainer 1')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('Trainer 2')).toBeInTheDocument());
  });
});