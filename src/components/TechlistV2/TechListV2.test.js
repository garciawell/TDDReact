import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Techlist from './index';

jest.mock('react-redux');

describe('Techlist component', () => {
  it('Should render tech list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ['Node.js', 'React.js'],
      })
    );
    const { getByText, getByTestId } = render(<Techlist />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('React.js'));
  });
});
