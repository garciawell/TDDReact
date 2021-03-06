import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Techlist from './index';

describe('Techlist component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('Should be able to add new tech', () => {
    const { getByText, getByTestId, getByLabelText } = render(<Techlist />);

    fireEvent.change(getByLabelText('Tech'), {
      target: { value: 'Node.js' },
    });
    fireEvent.submit(getByTestId('tech-form'));

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByLabelText('Tech')).toHaveValue('');
  });

  it('Should store techs in storage', () => {
    let { getByTestId, getByLabelText, getByText } = render(<Techlist />);

    fireEvent.change(getByLabelText('Tech'), {
      target: { value: 'Node.js' },
    });
    fireEvent.submit(getByTestId('tech-form'));

    cleanup();

    ({ getByTestId, getByLabelText, getByText } = render(<Techlist />));

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'techs',
      JSON.stringify(['Node.js'])
    );
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
  });
});
