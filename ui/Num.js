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
    changeValue: function(){

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
    render: function(){
        let{defaultNumber} = this.state;
        let{minNumber, maxNumber, stepNumber} = this.props;
        let minClass = defaultNumber - stepNumber < minNumber ? 'disabled' : '';
        let maxClass = defaultNumber + stepNumber > maxNumber ? 'disabled' : '';
        return(
           <div className="cm-num-adjust">
               <i className={`cm-adjust-minus ${minClass}`} onClick={this.subNumber}>-</i>
               <input type="tel" className="cm-adjust-view"  value={defaultNumber} onChange={this.changeValue}/>
               <i className={`cm-adjust-plus ${maxClass}`} onClick={this.addNumber}>+</i>
           </div>
        )
    }
});
export default Num;

