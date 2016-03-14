import React from 'react';
const Mask = {
    showMask: function(){
        let style = {
            width: '100%',
            position: 'absolute',
            left: '0px',
            top: '0px',
            height: document.documentElement.scrollHeight || document.body.scrollHeight,
            display: 'block'
        };
        return (
            <div className="view cui-mask" style={style} onClick={this.hideMask} ref="cuiMask"></div>
        )
    }
};
export default Mask;