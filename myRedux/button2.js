import React from 'react';
const Button2 = React.createClass({
    addFiles: function(){
        this.props.onActionClick('西游记后传')


    },
    render: function(){

        console.log('xxxx');
        //this.props.addFiles('西游记xx');
        return (
            <div onClick={this.addFiles}>
                增加x
            </div>
        )
    }
});

export default Button2;