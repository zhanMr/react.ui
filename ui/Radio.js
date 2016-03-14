import React from 'react';
import IScroll from 'iscroll';
import Mask from './Mask';
const Radio = React.createClass({
    propTypes:{
        data: React.PropTypes.array.isRequired,
        title: React.PropTypes.string.isRequired
    },
    getDefaultProps: function(){
        return {
            title: '',
            data: [],
            number: 5
        }
    },
    getInitialState: function(){
      return {
          selectIndex: 0,
          height: 100
      }
    },
    componentDidMount: function(){
        if(this.props.data.length > this.props.number){
            this.setState({
                height: 200
            },()=> {
                this.scroll = new IScroll(this.refs.wrapper, {
                    mouseWheel: true,
                    scrollbars: false
                });
            });
        }
    },
    componentWillUnmount: function(){
        this.scroll && this.scroll.destroy();
    },
    handleClick: function(item, index){
        this.setState({
            selectIndex: index
        })
    },
    render(){
        let {title, data} = this.props;
        let {selectIndex, height} = this.state;
        return(
            <div className="cui-pop-boxs">
                <Mask/>
                <div className="cui-pop-box">
                    <div className="cui-hd"><div className="cui-text-center">{title}</div></div>
                    <div className="cui-bd cui-roller-bd" ref="wrapper" style={{height:height + 'px',overflow: 'hidden', position:'relative'}}>
                        <ul className="cui-select-view">
                            {data.map((item, index) => {
                                return (<li key={index} onClick={this.handleClick.bind(this, item, index)} className={index == selectIndex ? 'current' : ''}>{item.name}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
export default Radio;