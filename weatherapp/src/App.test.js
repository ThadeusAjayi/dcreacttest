import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('the app component runs without errors', () => {
  const appComponent = renderer.create(
    <App />,
  );
  let tree = appComponent.toJSON();
  expect(tree).toMatchSnapshot();
})