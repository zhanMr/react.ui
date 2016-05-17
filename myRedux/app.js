import React from 'react';
import { connect } from 'react-redux';
import File from './file';
import Button from './button';
import {addFiles} from './action';
const App = React.createClass({
    addMyFile: function(){
        const {dispatch} = this.props;
        dispatch(addFiles('三国演义'));
    },
    render: function(){
        const {item,dispatch} = this.props;

        return (
            <div>
                <File data={this.props.item}/>
                <input />
                <p onClick={this.addMyFile}>++</p>
                <Button data={this.props.item} onAddClick={text => dispatch(addFiles(text))} />
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