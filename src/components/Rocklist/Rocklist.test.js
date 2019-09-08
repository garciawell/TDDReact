import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Rocklist from './index';
import * as ActionsTech from '~/store/modules/rocks/actions';

jest.mock('react-redux');

describe('Roclist selector', () => {
  it('Should render rock list', () => {
    useSelector.mockImplementation(cb =>
      cb({
        rocks: ['Node.js', 'React.js'],
      })
    );

    const { getByText, getByTestId } = render(<Rocklist />);

    expect(getByTestId('rock-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('rock-list')).toContainElement(getByText('React.js'));
  });

  it('Should be able to add new rock', () => {
    const { getByTestId, getByLabelText } = render(<Rocklist />);
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Rock'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('rock-form'));

    expect(dispatch).toHaveBeenCalledWith(ActionsTech.addRock('Node.js'));
  });
});
