import React from 'react';
import ReactDOM from 'react-dom';
import HelloCharts from './hello-charts';

//injected react-devtools
if (__DEV__) {
  require('preact/devtools');
}

//render
ReactDOM.render(<HelloCharts />, document.getElementById('app'));
