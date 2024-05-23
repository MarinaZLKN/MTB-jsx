import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "../components/Header";

jest.mock('../components/DropdownMenu', () => () => <div>Mocked Dropdown Menu</div>);

describe('Header Component', () => {
  const mockScrollToSection = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders header component', () => {
    const { getByText } = render(
      <Router>
        <Header scrollToSection={mockScrollToSection} />
      </Router>
    );

    expect(getByText('Meist')).toBeInTheDocument();
    expect(getByText('Kava')).toBeInTheDocument();
    expect(getByText('Hinnad')).toBeInTheDocument();
    expect(getByText('Tunniplaan')).toBeInTheDocument();
    expect(getByText('Treenerid')).toBeInTheDocument();
    expect(getByText('Uudised')).toBeInTheDocument();
    expect(getByText('Merch')).toBeInTheDocument();
    expect(getByText('Kontakt')).toBeInTheDocument();
    expect(getByText('Registreeri')).toBeInTheDocument();
  });

  test('calls scrollToSection when menu items are clicked', () => {
    const { getByText } = render(
      <Router>
        <Header scrollToSection={mockScrollToSection} />
      </Router>
    );

    fireEvent.click(getByText('Meist'));
    fireEvent.click(getByText('Kava'));
    fireEvent.click(getByText('Hinnad'));
    fireEvent.click(getByText('Tunniplaan'));
    fireEvent.click(getByText('Treenerid'));
    fireEvent.click(getByText('Kontakt'));

    expect(mockScrollToSection).toHaveBeenCalledWith('about');
    expect(mockScrollToSection).toHaveBeenCalledWith('programs');
    expect(mockScrollToSection).toHaveBeenCalledWith('prices');
    expect(mockScrollToSection).toHaveBeenCalledWith('schedule');
    expect(mockScrollToSection).toHaveBeenCalledWith('coaches');
    expect(mockScrollToSection).toHaveBeenCalledWith('contact');
  });

  test('opens and closes dropdown menu on burger menu click', () => {
    const { getByText, queryByText } = render(
      <Router>
        <Header scrollToSection={mockScrollToSection} />
      </Router>
    );

    fireEvent.click(getByText('☰'));
    expect(getByText('Mocked Dropdown Menu')).toBeInTheDocument();

    fireEvent.click(getByText('☰'));
    expect(queryByText('Mocked Dropdown Menu')).not.toBeInTheDocument();
  });

  test('navigates to correct routes on link clicks', () => {
    const { getByText } = render(
      <Router>
        <Header scrollToSection={mockScrollToSection} />
      </Router>
    );

    fireEvent.click(getByText('Uudised'));
    expect(window.location.pathname).toBe('/news');

    fireEvent.click(getByText('Merch'));
    expect(window.location.pathname).toBe('/merch');

    fireEvent.click(getByText('Registreeri'));
    expect(window.location.pathname).toBe('/register');
  });
});
