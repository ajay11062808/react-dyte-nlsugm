
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fileexplorer from './Fileexplorer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Fileexplorer />, document.getElementById('root'));

serviceWorker.unregister();