import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Contacts from "../components/Main/Section9/Contacts";


jest.mock('axios');

describe('Contacts Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.get.mockResolvedValue({
      data: [
        {
          company_name: "Test Company",
          account_number: "1234567890",
          address: "Test Address",
          phone_number1: "+123456789",
          phone_number2: "+987654321",
          email: "test@example.com",
          registration_number: "123456"
        }
      ]
    });
  });

  test('renders and allows text input', () => {
    const { getByLabelText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    const nameInput = getByLabelText('Nimi');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  test('shows error message for invalid email format', async () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    const emailInput = getByLabelText('Email*');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.submit(getByText('Contact us'));

    await waitFor(() => {
      const errorMessage = getByText('Invalid email format');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('resets form and shows success message on valid submission', async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    const { getByLabelText, getByText, queryByText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    fireEvent.change(getByLabelText('Nimi'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Telefoni number*'), { target: { value: '+123456789' } });
    fireEvent.change(getByLabelText('Message'), { target: { value: 'Hello!' } });
    fireEvent.submit(getByText('Contact us'));

    await waitFor(() => {
      const successMessage = getByText('Täname tagasiside eest!');
      expect(successMessage).toBeInTheDocument();
      expect(queryByText('Contact us')).toBeNull();
    });
  });
  test('fetches and displays contact data', async () => {
    const mockContactData = {
      company_name: 'Test Company',
      account_number: '123456',
      address: 'Test Address',
      phone_number1: '123456789',
      phone_number2: '987654321',
      email: 'test@example.com',
      registration_number: '789456'
    };
    axios.get.mockResolvedValueOnce({ data: [mockContactData] });

    const { findByText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    expect(await findByText('Test Company')).toBeInTheDocument();
    expect(await findByText('123456')).toBeInTheDocument();
    expect(await findByText('Test Address')).toBeInTheDocument();
    expect(await findByText('123456789')).toBeInTheDocument();
    expect(await findByText('987654321')).toBeInTheDocument();
    expect(await findByText('test@example.com')).toBeInTheDocument();
    expect(await findByText('789456')).toBeInTheDocument();
  });
});

