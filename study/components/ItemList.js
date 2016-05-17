import React from 'react';

export default class ItemList extends React.Component{
    static propTypes={
        items:React.PropTypes.array.isRequired,
        onDelClick:React.PropTypes.func
    };
    _onDelClick(index){
        console.log("itemlistclick",index);
        this.props.onDelClick(index);
    }
    render(){
        console.log("itemlist");
        console.log(this.props.items);
        return <ul>
            {
                this.props.items.map((value,index) =>
                    <li>{index},{value}<button onClick={this._onDelClick.bind(this,index)}>del</button></li>
                )}
        </ul>
    }
}