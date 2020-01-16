import React from 'react';
import { render } from 'react-testing-library'
import Display from './Display.js'

describe('<Display />', () => {
  it('renders successfully', () => {
    render(<Display />)
  });

  it('renders a div to show Balls', () => {
    const {getByText} = render(<Display />)

    getByText(/balls/i)
  })

  it('renders a div to show Strikes', () => {
    const {getByText} = render(<Display />)

    getByText(/strikes/i)
  })

});

