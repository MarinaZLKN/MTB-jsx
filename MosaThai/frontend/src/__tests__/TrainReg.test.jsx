import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TrainReg from "../components/TrainReg";
import axios from "axios";

jest.mock('axios');

describe('TrainReg Component', () => {
  beforeEach(() => {
    axios.post.mockClear();
  });

  test('renders and allows text input', () => {
    const { getByLabelText } = render(
      <Router>
        <TrainReg />
      </Router>
    );

    const nameInput = getByLabelText('Nimi');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  test('should show an error message for invalid email format', () => {
    const { getByLabelText, getByText, queryByText } = render(
      <Router>
        <TrainReg />
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

  // test('should validate age and parent name for child registration', async () => {
  //   const { getByLabelText, getByText } = render(
  //     <Router>
  //       <TrainReg />
  //     </Router>
  //   );
  //
  //   fireEvent.change(getByLabelText('Tase'), { target: { value: 'child' } });
  //   fireEvent.change(getByLabelText('Vanus'), { target: { value: '3' } });
  //   fireEvent.submit(getByText('Join us'));
  //
  //   await waitFor(() => {
  //     const ageErrorMessage = getByText((content) => content.includes('Age must be at least'));
  //     expect(ageErrorMessage).toBeInTheDocument();
  //   });
  //
  //   fireEvent.change(getByLabelText('Vanus'), { target: { value: '4' } });
  //   fireEvent.change(getByLabelText('Lapse vanema nimi'), { target: { value: '' } });
  //   fireEvent.submit(getByText('Join us'));
  //
  //   await waitFor(() => {
  //     const parentErrorMessage = getByText((content) => content.includes('Parent name is required'));
  //     expect(parentErrorMessage).toBeInTheDocument();
  //   });
  // });

  test('should conditionally render fields for child registration', () => {
    const { getByLabelText, queryByLabelText } = render(
      <Router>
        <TrainReg />
      </Router>
    );

    expect(queryByLabelText('Vanus')).toBeNull();
    expect(queryByLabelText('Lapse vanema nimi')).toBeNull();

    fireEvent.change(getByLabelText('Tase'), { target: { value: 'child' } });
    expect(getByLabelText('Vanus')).toBeInTheDocument();
    expect(getByLabelText('Lapse vanema nimi')).toBeInTheDocument();
  });


  test('should reset form and show success message on valid submission', async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    const { getByLabelText, getByText, queryByText } = render(
      <Router>
        <TrainReg />
      </Router>
    );

    fireEvent.change(getByLabelText('Nimi'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Telefoni number*'), { target: { value: '+123456789' } });
    fireEvent.change(getByLabelText('Tase'), { target: { value: 'beginner' } });
    fireEvent.submit(getByText('Join us'));

    await waitFor(() => {
      const successMessage = getByText(/Täname registreerumise eest! Kohtume treeningul!:/i);
      expect(successMessage).toBeInTheDocument();
      expect(queryByText('Join us')).toBeNull();
    });
  });

  test('should send correct data to the server', async () => {
    const mockResponse = { data: { success: true } };
    axios.post.mockResolvedValueOnce(mockResponse);

    const { getByLabelText, getByText } = render(
      <Router>
        <TrainReg />
      </Router>
    );

    fireEvent.change(getByLabelText('Nimi'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Telefoni number*'), { target: { value: '+123456789' } });
    fireEvent.submit(getByText('Join us'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://127.0.0.1:8000/v1/registrations/',
        expect.objectContaining({
          name: 'John Doe',
          email: 'john@example.com',
          phone_number: '+123456789',
          level: 'beginner',
          age: 0,
          parent_name: '',
        })
      );
    });
  });


});