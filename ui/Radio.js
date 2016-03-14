import React from 'react';
import IScroll from 'iscroll';
import Mask from './Mask';
const Radio = React.createClass({
    mixins: [Mask],
    propTypes:{
        radioData: React.PropTypes.array.isRequired

    },
    //关闭
    hideMask: function(){
        this.setState({
            visible: false
        });
    },
    //在组件接收到新的 props 的时候调用
    //在初始化渲染的时候，该方法不会调用
    componentWillReceiveProps: function(){
        this.setState({
            visible: true
        },()=>{
            if(!this.scroll){
                this.scroll = new IScroll(this.refs.wrapper, {
                    mouseWheel: true,
                    scrollbars: false
                })
            }
        })
    },
    getInitialState: function(){
        return {
          selectIndex: 0,
          visible: this.props.visible
      }
    },
    componentWillUnmount: function(){
        this.scroll && this.scroll.destroy();
    },
    handleClick: function(item, index){
        this.props.itemAction(item);
        this.setState({
            selectIndex: index,
            visible: false
        });
    },
    render: function(){
        let {radioTitle, radioData} = this.props;
        let {selectIndex} = this.state;
        return(
           <div style={{display:this.state.visible ? '' : 'none'}}>
           {this.showMask()}
               <div className="cui-pop-box">
                   <div className="cui-hd"><div className="cui-text-center">{radioTitle}</div></div>
                   <div className="cui-bd cui-roller-bd" ref="wrapper" style={{height:'200px',overflow: 'hidden', position:'relative'}}>
                       <ul className="cui-select-view">
                            {radioData.map((item, index) => {
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