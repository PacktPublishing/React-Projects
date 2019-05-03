import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SubHeader from './SubHeader'

describe('the <SubHeader /> component', () => {
  const renderer = new ShallowRenderer();

  it('should render', () => {
    renderer.render(<SubHeader />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  })

  it('should render with a dynamic title', () => {
    renderer.render(<SubHeader title="Test Application" />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  })

  it('should render with a goback button', () => {
    renderer.render(<SubHeader goBack={() => {}} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  })

  it('should render with a form button', () => {
    renderer.render(<SubHeader openForm={() => {}} />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  })
})
