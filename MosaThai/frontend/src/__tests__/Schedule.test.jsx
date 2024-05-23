import React from 'react';
import { render, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Schedule from "../components/Main/Section6/Schedule";

jest.mock('axios');

describe('Schedule Component', () => {
  beforeEach(() => {
    axios.get.mockClear();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('renders Schedule component and fetches schedule data', async () => {
    const mockData = [
      { id: 1, time: '08:00', monday: 'Yoga', tuesday: '', wednesday: 'Pilates', thursday: '', friday: 'Crossfit', saturday: '' }
    ];

    axios.get.mockResolvedValue({ data: mockData });

    const { getByText } = render(<Schedule />);

    await waitFor(() => expect(getByText('Tunniplaan')).toBeInTheDocument());
    await waitFor(() => expect(getByText('08:00')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Yoga')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Pilates')).toBeInTheDocument());
    await waitFor(() => expect(getByText('Crossfit')).toBeInTheDocument());
  });

  test('displays error message when fetch fails', async () => {
    const errorMessage = 'API is down';
    axios.get.mockRejectedValue(new Error(errorMessage));

    render(<Schedule />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Mistake/error fetching data: ', expect.any(Error));
    });
  });
});