require('./css/style.css');
import React from 'react';
import ReactDOM  from 'react-dom';
import Calendar  from './ui/Calendar';
import Number  from './ui/Number';
ReactDOM.render(
    <Calendar />,
    document.getElementById('Calendar')
);
ReactDOM.render(
    <Number minNumber={1} maxNumber={9} defaultNumber={5} stepNumber={2}/>,
    document.getElementById('Number')
);
