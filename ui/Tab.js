//Tab切换
import React from 'react';
const Tab = React.createClass({
    propTypes:{
        radioData: React.PropTypes.array,
        selectIndex: React.PropTypes.number,
        tabAction: React.PropTypes.func
    },
    getInitialState: function(){
        return {
            selectIndex: this.props.selectIndex
        }
    },
    getDefaultProps: function(){
        return {
            selectIndex: 0,
            radioData: [],
            tabAction: ()=>{}
        }
    },
    showData: function(item, key){
        this.props.tabAction(item);
        this.setState({
            selectIndex: key
        })
    },
    render: function(){
        return (
            <ul className="cui-tab-mod">
                {this.props.radioData.map((item, key)=>{
                    return (<li key={key}   className={key === this.state.selectIndex ? 'cui-tab-current' : ''} onClick={this.showData.bind(this, item, key)}>{item.name}</li>)
                })}
                <i className={`cui-tab-scrollbar cui-tabnum${this.props.radioData.length}`}></i>
            </ul>
            )
    }
});
export default Tab;