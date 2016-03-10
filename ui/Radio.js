import React from 'react';
const Radio = React.createClass({
    propTypes:{
        data: React.PropTypes.array.isRequired,
        title: React.PropTypes.string.isRequired
    },
    getDefaultProps: function(){
        return {
            title: '',
            data: []
        }
    },
    getInitialState: function(){
      return {
          selectIndex: 0
      }
    },
    handleClick: function(item, index){
        this.setState({
            selectIndex: index
        })
    },
    render(){
        let {title, data} = this.props;
        let {selectIndex} = this.state;
        return(
            <div className="cui-pop-box">
                <div className="cui-hd"><div className="cui-text-center">{title}</div></div>
                <div className="cui-bd cui-roller-bd">
                    <ul className="cui-select-view">
                        {data.map((item, index) => {
                            return (<li key={index} onClick={this.handleClick.bind(this, item, index)} className={index == selectIndex ? 'current' : ''}>{item.name}</li>)
                        })}
                    </ul>
                </div>
            </div>
        )
    }
});
export default Radio;