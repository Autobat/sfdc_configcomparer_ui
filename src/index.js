import React 	from 'react';
import ReactDOM from 'react-dom';

import App 		from './App';
import Header 	from './components/header.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));

registerServiceWorker();
