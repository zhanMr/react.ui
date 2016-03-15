//Switch切换
import React from 'react';
var Switch = React.createClass({
    protoTypes:{
        selectAction: React.PropTypes.func,
        selected: React.PropTypes.bool
    },
    getDefaultProps: function(){
      return {
          selected: true,
          selectAction: ()=>{}
      }
    },
    getInitialState: function(){
        return {
            selected: this.props.selected
        }
    },
    swicthClick: function(){
        this.props.selectAction(!this.state.selected);
        this.setState({
            selected: !this.state.selected
        })
    },
    render: function(){
        return (
            <div className={`cui-switch ${this.state.selected ? 'current' : ''}`} onClick={this.swicthClick}><div className="cui-switch-bg current"></div><div className="cui-switch-scroll"></div></div>
        )
    }
});
export default Switch;