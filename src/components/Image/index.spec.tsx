import React from "react";
import Image from "./index";
import { render, screen } from '@testing-library/react';

describe('Image', () => {
  it('render default', () => {
    render(<Image />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  })

  it('render with src', () => {
    const src: string = 'https://s3.polygon.io/logos/tsla/logo.png';
    render(<Image src={src}/>);
    expect(screen.getByRole('img')).toHaveAttribute('src', src);
  })
})