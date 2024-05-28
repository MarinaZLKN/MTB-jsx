import React from 'react';
import { render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import MerchandiseItem from "../components/Merch/MerchandiseItem";


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

const mockItem = {
  id: 10,
  name: "Pusa",
  description: "High-quality hoodie",
  price: "40.00",
  photo1: "/media/merchandise/Front_9YRfgcB.jpg",
  photo2: "/media/merchandise/Back_ZrAwYix.jpg",
  photo3: null,
  available_quantity: 2,
  sizes: [
    { id: 1, name: "S" },
    { id: 2, name: "M" },
    { id: 3, name: "L" }
  ]
};

describe('MerchandiseItem Component', () => {
  it('renders item details correctly', () => {
    render(<MerchandiseItem item={mockItem} />);

    expect(screen.getByText('Pusa')).toBeInTheDocument();
    expect(screen.getByText('High-quality hoodie')).toBeInTheDocument();
    expect(screen.getByText('40.00€')).toBeInTheDocument();
    expect(screen.getByText('Available Quantity: 2')).toBeInTheDocument();
    expect(screen.getByText('Sizes: S, M, L')).toBeInTheDocument();
  });

  it('renders images correctly', () => {
    render(<MerchandiseItem item={mockItem} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'http://127.0.0.1:8000/media/merchandise/Front_9YRfgcB.jpg');
    expect(images[1]).toHaveAttribute('src', 'http://127.0.0.1:8000/media/merchandise/Back_ZrAwYix.jpg');
  });

  it('does not render photo3 if it is null', () => {
    render(<MerchandiseItem item={mockItem} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });
});
