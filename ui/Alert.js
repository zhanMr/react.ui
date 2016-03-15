import React from 'react';
import Mask from './Mask';
const Alert = React.createClass({
    //关闭
    mixins: [Mask],
    propTypes:{
        title: React.PropTypes.string,
        message: React.PropTypes.string,
        closeAlert: React.PropTypes.array
    },
    hideMask: function(){
        this.setState({
            visible: false
        });
    },
    componentWillReceiveProps: function(){
        this.setState({
            visible: true
        })
    },
    closeAlert: function(item, key){
        this.hideMask();
        this.props.alertAction[key] && this.props.alertAction[key].clickAction && this.props.alertAction[key].clickAction();
    },
    getInitialState: function(){
        return {
            visible: this.props.visible
        }
    },
    getDefaultProps: function(){
        return {
            title: '',
            message: '',
            closeAlert: []
        }
    },
    render: function(){
        let{title, message} = this.props;
        return (
            <div style={{display:this.state.visible ? '' : 'none'}}>
                {this.showMask()}
              <div className="cui-pop-box">
                  <div className="cui-hd">{title}</div>
                  <div className="cui-bd">
                      <div className="cui-error-tips">{message}</div>
                      <div className="cui-roller-btns">
                        {this.props.alertAction.map((item, key)=>{
                            return (<div className="cui-flexbd" key={key} onClick={this.closeAlert.bind(this, item, key)}>{item.name}</div>);
                        })}
                      </div>
                  </div>
              </div>
            </div>
        )
    }
});
export default Alert;