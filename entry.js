require('./css/style.css');
import React from 'react';
import ReactDOM  from 'react-dom';
import Calendar  from './ui/Calendar';
import Num  from './ui/Num';
ReactDOM.render(
    <Calendar />,
    document.getElementById('Calendar')
);

//Num
let selectNumber = selectNumber => selectNumber;
ReactDOM.render(
    <Num minNumber={1} maxNumber={9} defaultNumber={5} stepNumber={2} selectNumber={selectNumber}/>,
    document.getElementById('Number')
);

