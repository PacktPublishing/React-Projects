import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from './Header'

describe('the <Header /> component', () => {
  const renderer = new ShallowRenderer();

  it('should render', () => {
    renderer.render(<Header />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  })

  it('should render with a dynamic title', () => {
    renderer.render(<Header title="Test Application" />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  })
})
