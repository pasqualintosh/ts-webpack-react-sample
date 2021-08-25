import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import CreatePeople, {
  IProps,
} from './../../components/CreatePeople/CreatePeople';

type Props = {
  people: IProps['people'];
  setPeople: IProps['setPeople'];
};

const defaultProps: Props = {
  people: [],
  setPeople: jest.fn(),
};

describe('render', (): void => {
  beforeEach((): void => {
    render(
      <CreatePeople
        people={defaultProps.people}
        setPeople={defaultProps.setPeople}
      />,
    );
  });

  it('should render something with placeholder=name', (): void => {
    expect(screen.queryByPlaceholderText('name')).toBeInTheDocument();
  });

  it('should render a button', (): void => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('on click calls setPeople', (): void => {
    userEvent.click(screen.getByRole('button'));
    expect(defaultProps.setPeople).toHaveBeenCalled();
  });
});
