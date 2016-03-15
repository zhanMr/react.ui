require('./css/style.css');
import React from 'react';
import ReactDOM  from 'react-dom';
import Calendar  from './ui/Calendar';
import Num  from './ui/Num';
import Radio  from './ui/Radio';
import Tab from './ui/Tab';
import Switch from './ui/Switch';
let initUi = item => {
    let div = document.createElement('div');
    div.style.padding = "10px 0";
    ReactDOM.render(item, document.body.appendChild(div))
};
let reactUi = [
    (()=>{
        let holiday = {
            '3/8': '妇女节'
        };
        return <Calendar holiday = {holiday}/>
    })(),(()=>{
        return <Num minNumber={1} maxNumber={9} defaultNumber={5} stepNumber={2}/>
    })(),(()=>{
        let RadioButton = React.createClass({
            getDefaultProps: function(){
                return {
                    radioData: [{name: '上海', id: 0}, {name: '深圳', id: 1}, {name: '北京', id: 2}, {name: '杭州', id: 3}, {name: '苏州', id: 4}, {name: '广州', id: 5}],
                    radioTitle: '相关城市',
                    number: 5,
                    itemAction: (item)=> {
                        console.log(item);
                    }
                }
            },
            getInitialState: function(){
                return {
                    visible: false
                }
            },
            show: function(){
                this.setState({
                    visible: true
                });
            },
            render: function(){
                return (
                    <div>
                        <span className="btn-secondary" onClick={this.show}>radioButton</span>
                        <Radio visible={this.state.visible} {...this.props}/>
                    </div>
                )
            }
        });
        return <RadioButton/>;
    })(),(()=>{
        let TabList = React.createClass({
            getDefaultProps: function(){
              return {
                  radioData: [{name: '上海', id: 0}, {name: '深圳', id: 1}, {name: '北京', id: 2}, {name: '杭州', id: 3}],
                  selectIndex: 3,
                  tabAction: (item) =>{
                      console.log(item);
                  }
              }
            },
            render: function(){
                return (<Tab {...this.props}/>);
            }
        });
        return <TabList/>;
    })(),(()=>{
        let SwitchDemo = React.createClass({
            getDefaultProps: function(){
              return {
                  selected: false,
                  selectAction: (selected) => {
                      console.log(selected);
                  }
              }
            },
            render: function(){
                return (<Switch {...this.props}/>);
            }
        });
        return <SwitchDemo/>;
    })()
];
reactUi.forEach(item => initUi(item));