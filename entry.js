require('./css/style.css');
import React from 'react';
import ReactDOM  from 'react-dom';
import Calendar  from './ui/Calendar';
import Num  from './ui/Num';
import Radio  from './ui/Radio';
import Tab from './ui/Tab';
import Switch from './ui/Switch';
import Alert from './ui/Alert';
import SlidePhoto from './ui/SlidePhoto';
let initUi = item => {
    let div = document.createElement('div');
    div.style.padding = "10px 0";
    ReactDOM.render(item, document.body.appendChild(div))
};
let reactUi = [
    (()=>{
        let CalendarDemo = React.createClass({
            getDefaultProps: function(){
                return {
                    holiday: {
                        '3/8': '妇女节'
                    }
                }
            },
            render: function(){
                return <Calendar {...this.props}/>;
            }
        });
        return <CalendarDemo/>
    })(),(()=>{
        let NumDemo = React.createClass({
            getDefaultProps: function(){
                return {
                    minNumber: 1,
                    maxNumber: 9,
                    defaultNumber: 5,
                    stepNumber: 2,
                    selectNumber: (number) => {
                        console.log(number);
                    }
                }
            },
            render: function(){
                return <Num {...this.props}/>
            }
        });
        return <NumDemo/>;
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
    })(),
    (()=>{
        let AlertDemo = React.createClass({
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
            getDefaultProps: function(){
                return {
                    title: '标题',
                    message: '确定要删除吗？',
                    alertAction: [
                        {
                            name: '取消',
                            clickAction: ()=>{
                                console.log('取消');
                            }
                        },
                        {
                            name: '确定',
                            clickAction: ()=>{
                                console.log('确定');
                            }
                        }
                    ]

                }
            },
            render: function(){
               return (
                   <div>
                       <span className="btn-secondary" onClick={this.show}>alertButton</span>
                       <Alert visible={this.state.visible} {...this.props}/>
                   </div>
               )
            }
        });
        return <AlertDemo/>;
    })(),
    (()=>{
        let SlideDemo = React.createClass({
            getDefaultProps: function(){
                return {
                    data:[{
                        url: 'http://images.cnitblog.com/blog/294743/201412/051803075458022.jpg',
                        title: '图片1'
                    },{
                        url: 'http://images.cnitblog.com/blog/294743/201412/051803252488182.jpg',
                        title: '图片2'
                    },{
                        url: 'http://images.cnitblog.com/blog/294743/201412/051803198737858.jpg',
                        title: '图片3'
                    }]
                }
            },
            render: function(){
                return(
                    <div><SlidePhoto {...this.props}/></div>
                )
            }
        });
        return <SlideDemo/>
    })()
];
reactUi.map(item => initUi(item));