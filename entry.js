require("./css/style.css");
var React = require('react');
var ReactDOM = require('react-dom');
var Calendar = require('./ui/Calendar');
ReactDOM.render(
    <Calendar name="React !"/>,
    document.getElementById('example')
);