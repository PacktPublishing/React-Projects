import React from 'react';
import { shallow } from 'enzyme';
import SubHeader, { Title, SubHeaderButton } from './SubHeader';

describe('the <SubHeader /> component', () => {
  it('should render with a dynamic title', () => {
    const title = 'Test Application';
    const component = shallow(<SubHeader title={title} />);

    expect(component.find(Title).text()).toEqual(title);
  });

  it('should render with buttons and handle the onClick events', () => {
    const mockGoBack = jest.fn();
    const mockOpenForm = jest.fn();
    const component = shallow(
      <SubHeader goBack={mockGoBack} openForm={mockOpenForm} />,
    );

    const goBackButton = component.find(SubHeaderButton).at(0);
    expect(goBackButton.exists()).toBe(true);

    const openFormButton = component.find(SubHeaderButton).at(1);
    expect(openFormButton.exists()).toBe(true);

    goBackButton.simulate('click');
    expect(mockGoBack).toHaveBeenCalled();

    openFormButton.simulate('click');
    expect(mockOpenForm).toHaveBeenCalled();
  });
});
