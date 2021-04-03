import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory';
import {Provider} from "react-redux";
import store from  "./subscriber-store"

ReactDOM.render(<Provider store={store}> <PhoneDirectory /></Provider>, document.getElementById('root'));
registerServiceWorker();
