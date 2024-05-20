import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Contacts from "../components/Main/Section9/Contacts";
import TrainReg from "../components/TrainReg";


jest.mock('axios');
describe('Contacts Component', () => {
  beforeEach(() => {
    axios.post.mockClear();
  });

  test('renders Contacts component', () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    expect(getByText('Kirjuta meile')).toBeInTheDocument();
    expect(getByLabelText('Nimi')).toBeInTheDocument();
    expect(getByLabelText('Email*')).toBeInTheDocument();
    expect(getByLabelText('Telefoni number*')).toBeInTheDocument();
    expect(getByLabelText('Message')).toBeInTheDocument();
  });

  test('shows error message for invalid email format', () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    const emailInput = getByLabelText('Email*');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.submit(emailInput);

    expect(getByText('Invalid email format')).toBeInTheDocument();
  });

  // Проверка валидации номера телефона
  test('shows error message for invalid phone number format', () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    const phoneInput = getByLabelText('Telefoni number*');
    fireEvent.change(phoneInput, { target: { value: 'invalid-phone' } });
    fireEvent.submit(phoneInput);

    expect(getByText('Phone number must contain only digits and may start with +')).toBeInTheDocument();
  });
  test('should show an error message for invalid email format', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <Router>
        <Contacts />
      </Router>
    );

    const emailInput = getByLabelText('Email*');
    fireEvent.change(emailInput, { target: { value: 'wrongemail' } });
    fireEvent.submit(emailInput);

    const errorMessage = getByText('Invalid email format');
    expect(errorMessage).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'correct@email.com' } });
    fireEvent.submit(emailInput);
    expect(queryByText('Invalid email format')).toBeNull();
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



