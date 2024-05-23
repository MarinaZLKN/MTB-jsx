import React from 'react';
import { render, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import TrainingList from "../components/Main/Section5/TrainingList";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Training 1', amount: 100 }]),
  })
);

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

describe('TrainingList Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders TrainingList component and fetches trainings', async () => {
    const { getByText } = render(<TrainingList />);

    await waitFor(() => expect(getByText('Hinnakiri')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Training 1')).toBeInTheDocument());
    await waitFor(() => expect(getByText('100 €')).toBeInTheDocument());
  });

  test('displays error message when fetch fails', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));

    render(<TrainingList />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Error fetching data:', 'API is down');
    });
  });
});