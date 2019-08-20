import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Techlist from '~/components/Techlist';

describe('Techlist component', () => {
  it('Should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText } = render(<Techlist />);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });

    fireEvent.submit(getByTestId('tech-form'));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });
});
