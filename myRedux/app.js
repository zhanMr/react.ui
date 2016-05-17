import React from 'react';
import { connect } from 'react-redux';
import File from './file';
import Button from './button';
import * as action from './action';
import {bindActionCreators} from 'redux';
const App = React.createClass({
    addMyFile: function(){
        const {dispatch} = this.props;
        dispatch(action.addFiles('三国演义'));
    },
    render: function(){
        const {item,dispatch} = this.props;
        let boundActionCreators = bindActionCreators(action, dispatch);
        console.log(boundActionCreators);
        return (
            <div>
                <File data={this.props.item}/>
                <input />
                <p onClick={this.addMyFile}>++</p>
                <Button data={this.props.item} {...boundActionCreators} onAddClick={text => dispatch(action.addFiles(text))} />
            </div>
        )
    }
});
function select(state) {
    return {
        item: state.addFile
    };
}

export default connect(select)(App)