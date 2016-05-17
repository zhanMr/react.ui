import React from 'react';
const File = React.createClass({
    render: function(){

        return (
            <div>xxx
                {this.props.data.map((data,key)=>{
                    return (<p key={key}>{data}</p>)
                })}
            </div>
        )
    }
});

export default File;