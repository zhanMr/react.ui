require('./css/style.css');
import React from 'react';
import ReactDOM  from 'react-dom';
import Calendar  from './ui/Calendar';
import Num  from './ui/Num';
import Radio  from './ui/Radio';
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

//Radio
let radioTitle = '简单应用';
let radioData = [
    {
        name: '汉语',
        id: 0
    },
    {
        name: '英语',
        id: 1
    },
    {
        name: '德语',
        id: 2
    },
    {
        name: '法语',
        id: 2
    },
    {
        name: '韩语',
        id: 2
    },
    {
        name: '阿拉伯语',
        id: 2
    }
];
ReactDOM.render(
    <Radio title={radioTitle} data={radioData}/>,
    document.getElementById('Radio')
);

