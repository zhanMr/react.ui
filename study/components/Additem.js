import React from 'react';

export default class AddItem extends React.Component{
    static propTypes = {
        onAddClick:React.PropTypes.func
    };
    _clickHandle(e){
        console.log("additemclick");
        this.props.onAddClick(this.refs.itemText.value.trim());
    }
    render(){
        console.log("additem");
        return <div>
            <input type="text" ref="itemText"/><br/>
            <button onClick={this._clickHandle.bind(this)}>add</button>
        </div>
    }
}