import React from "react";
import StockCompany from "./index";
import { render, screen } from '@testing-library/react';
import {StockInfo} from "types/common";

describe('StockCompany', () => {
  it('render default', () => {
    const initialStock: StockInfo = {
      value: '',
      label: '',
      ticker: '',
      name: '',
    };

    render(<StockCompany  stock={initialStock}/>);
    expect(screen.getByTestId('clear-stock')).toBeInTheDocument();
  })

  it('render with stock info', () => {
    const initialStock: StockInfo = {
      value: 'tsla',
      label: 'Tesla',
      ticker: 'tsla',
      name: 'Tesla',
    };

    render(<StockCompany  stock={initialStock}/>);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://s3.polygon.io/logos/tsla/logo.png');
  })
})