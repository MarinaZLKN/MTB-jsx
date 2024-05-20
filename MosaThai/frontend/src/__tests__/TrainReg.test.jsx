import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TrainReg from '../components/TrainReg.jsx';
describe('TrainReg Component', () => {
  test('renders and allows text input', () => {
    const { getByLabelText, getByRole } = render(<TrainReg />);

    const nameInput = getByLabelText('Nimi');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');

    const emailInput = getByLabelText('Email*');
    fireEvent.change(emailInput, { target: { value: 'john@gmail.com' } });
    expect(emailInput.value).toBe('john@gmail.com');
  });

  test('validates email and shows error message on invalid input', () => {
    const { getByLabelText, getByText } = render(<TrainReg />);

    const emailInput = getByLabelText('Email*');
    fireEvent.change(emailInput, { target: { value: 'john' } });
    fireEvent.blur(emailInput);

    const errorMessage = getByText('Invalid email format');
    expect(errorMessage).toBeInTheDocument();
  });


});