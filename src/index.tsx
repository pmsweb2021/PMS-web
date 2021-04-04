import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

let rootEl = document.getElementById('root');

// Create a reusable render method that we can call more than once
const render = (Component: React.FC) => {
	ReactDOM.render(<Component />, rootEl);
};

render(Root);

serviceWorker.unregister();
