require('./css/style.css');
import React from 'react';
import ReactDOM  from 'react-dom';
import Calendar  from './ui/Calendar';
import Num  from './ui/Num';
import Radio  from './ui/Radio';
let initUi = item => {
    var div = document.createElement('div');
    ReactDOM.render(item(), document.body.appendChild(div))
};
let reactUi = [
    (()=>{
        var holiday = {
            '3/8': '妇女节'
        };
        return <Calendar holiday = {holiday}/>
    }),(()=>{
        return <Num minNumber={1} maxNumber={9} defaultNumber={5} stepNumber={2}/>
    })
];
reactUi.forEach(item => initUi(item));