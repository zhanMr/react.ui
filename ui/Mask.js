import React from 'react';
const Mask = React.createClass({
    maskHide: function(){
       // this.refs.cuiMask.hide();
        console.log(this.refs.cuiMask);
        this.setState({visible: false});
    },
    render: function(){
        let style = {
            width: '100%',
            position: 'absolute',
            left: '0px',
            top: '0px',
            height: document.documentElement.scrollHeight || document.body.scrollHeight
        };
        return (
            <div className="view cui-mask" style={style} onClick={this.maskHide} ref="cuiMask"></div>
        )
    }
});
export default Mask;