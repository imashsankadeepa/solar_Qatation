import React from 'react';
import { render, screen } from '@testing-library/react';
import { CoverPage } from '../components/CoverPage';

// Mock image import
jest.mock('../assets/untitled_design.png', () => 'logo.png');

describe('CoverPage Component', () => {

  test('renders CoverPage without crashing', () => {
    render(<CoverPage />);
    expect(screen.getByText(/Official Business/i)).toBeInTheDocument();
  });

  test('displays company logo', () => {
    render(<CoverPage />);
    const logo = screen.getByAltText(/Vista Solar Logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('displays proposal title', () => {
    render(<CoverPage />);
    expect(screen.getByText(/Design &/i)).toBeInTheDocument();
    expect(screen.getByText(/Installation/i)).toBeInTheDocument();
    expect(screen.getByText(/SOLAR ENERGY SYSTEMS/i)).toBeInTheDocument();
  });

  test('displays SEA registration number', () => {
    render(<CoverPage />);
    expect(screen.getByText(/SEA REGISTRATION NO/i)).toBeInTheDocument();
  });

  test('renders Residential card', () => {
    render(<CoverPage />);
    expect(screen.getByText(/Residential/i)).toBeInTheDocument();
  });

  test('renders Eco-Friendly card', () => {
    render(<CoverPage />);
    expect(screen.getByText(/Eco-Friendly/i)).toBeInTheDocument();
  });

  test('renders savings card', () => {
    render(<CoverPage />);
    expect(screen.getByText(/40%/i)).toBeInTheDocument();
    expect(screen.getByText(/Savings/i)).toBeInTheDocument();
  });

  test('renders warranty card', () => {
    render(<CoverPage />);
    expect(screen.getByText(/25 Yrs/i)).toBeInTheDocument();
    expect(screen.getByText(/Warranty/i)).toBeInTheDocument();
  });

  test('renders footer location', () => {
    render(<CoverPage />);
    expect(screen.getByText(/Negombo, Sri Lanka/i)).toBeInTheDocument();
  });

  test('renders website URL', () => {
    render(<CoverPage />);
    expect(screen.getByText(/www.vistasolar.lk/i)).toBeInTheDocument();
  });

  test('renders footer branding text', () => {
    render(<CoverPage />);
    expect(screen.getByText(/Sustainability First/i)).toBeInTheDocument();
  });

});
