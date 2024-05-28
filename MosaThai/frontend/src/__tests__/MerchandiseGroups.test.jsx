import React from 'react';
import { render, screen } from '@testing-library/react';
import MerchandiseGroups from "../components/Merch/MerchendiseGroups";

beforeAll(() => {
  window.matchMedia = window.matchWebkitMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
});

afterAll(() => {
  delete window.matchMedia;
});

jest.mock('react-slick', () => {
  return ({ children }) => <div>{children}</div>;
});

describe('MerchandiseGroups Component', () => {
  it('renders "Varsti tulemas ;)" if no merchandise in categories', () => {
    const categories = [];
    render(<MerchandiseGroups categories={categories} />);
    expect(screen.getByText('Varsti tulemas ;)')).toBeInTheDocument();
  });

});

