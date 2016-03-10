import React from 'react';
const Num = React.createClass({
    getInitialState: function(){
        return {
            defaultNumber: this.props.defaultNumber
        }
    },
    getDefaultProps: function(){
        return{
            defaultNumber: 2,
            minMunber: 0,
            maxNumber: 10,
            stepNumber: 1,
            selectNumber: () => {}
        }
    },
    addNumber: function(){
        let{defaultNumber} = this.state;
        let{maxNumber, stepNumber, selectNumber} = this.props;
        defaultNumber += stepNumber;
        if(defaultNumber > maxNumber) return;
        this.setState({
            defaultNumber: defaultNumber
        });
        console.log(selectNumber(defaultNumber));
    },
    subNumber: function(){
        let{defaultNumber} = this.state;
        let{minNumber, stepNumber, selectNumber} = this.props;
        defaultNumber -= stepNumber;
        if(defaultNumber < minNumber) return;
        this.setState({
            defaultNumber: defaultNumber
        });
        console.log(selectNumber(defaultNumber));
    },
    render(){
        let{defaultNumber} = this.state;
        let{minNumber, maxNumber, stepNumber} = this.props;
        let minClass = defaultNumber - stepNumber < minNumber ? 'num_invalid' : '';
        let maxClass = defaultNumber + stepNumber > maxNumber ? 'num_invalid' : '';
        return(
           <div className="room_num">
               <i className={`list_num_dec ${minClass}`} onClick={this.subNumber}>-</i>
               <span className="list_num">{defaultNumber}</span>
               <i className={`list_num_inc ${maxClass}`} onClick={this.addNumber}>+</i>
           </div>
        )
    }
});
module.exports = Num;
