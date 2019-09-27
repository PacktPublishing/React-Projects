import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('the <Button /> component', () => {
  it('should render the correct children', () => {
    const children = 'This is a button';
    const component = shallow(<Button>{children}</Button>);

    expect(component.props().children).toEqual(children);
  });

  it('should handle the onClick event', () => {
    const mockOnClick = jest.fn();
    const component = shallow(<Button onClick={mockOnClick} />);

    component.simulate('click');

    expect(mockOnClick).toHaveBeenCalled();
  });
});
