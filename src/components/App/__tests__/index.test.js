import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from '..';

it('renders correctly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TestComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
