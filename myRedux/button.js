import React from 'react';
const Button = React.createClass({
    addFiles: function(){
      //this.props.addFiles('西游记')
        this.props.addFiless('三国演义')

    },
    render: function(){

        console.log('xxxx');
       //this.props.addFiles('西游记xx');
        return (
            <div onClick={this.addFiles}>
            增加
            </div>
        )
    }
});

export default Button;