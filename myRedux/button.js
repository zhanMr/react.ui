import React from 'react';
const Button = React.createClass({
    addFiles: function(){
      this.props.onAddClick('西游记')
        console.log(this.props.data);
    },
    render: function(){
        return (
            <div onClick={this.addFiles}>
            增加
            </div>
        )
    }
});

export default Button;