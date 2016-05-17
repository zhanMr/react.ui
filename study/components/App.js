import React from 'react';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  * as actions from '../actions/index';
import AddItem from './AddItem';
import ItemList from './ItemList';

class App extends React.Component{

    render(){
        console.log(this.props.items);
        return <div>
            <AddItem onAddClick={(text) => this.props.actions.addItem(text)} />
            <ItemList items={this.props.items} onDelClick={index=>this.props.actions.delItem(index)}/>
        </div>
    }
}
export default connect(({items})=>({items}),(dispatch) => ({actions:bindActionCreators(actions,dispatch)}))(App);