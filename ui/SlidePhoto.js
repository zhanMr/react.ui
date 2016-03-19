import React from 'react';
class SlidePhoto extends React.Component{
    static propTypes = {
        data: React.PropTypes.array.isRequired
    }
    static defaultProps = {
        data: []
    }

    render(){
        return(
            <div style={{position:'relative'}}>
                <div className="cui-navContainer" style={{color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001'}}>
                    {this.props.data.map((item,key)=>{
                        return (
                            <span className={`cui-slide-nav-item ${key === this.state.index ? 'cui-slide-nav-item-current' : ''}`} key={key} onClick={this.showPhoto.bind(this, item, key)}></span>
                        )
                    })}
                </div>
                <div className="cm-slide cm-slide--full-img">
                    <ul className="cm-slide-list">
                         {this.props.data.map((item, key)=>{
                             return (
                                 <li className="cm-slide-item" key={key}>
                                     <img src={item.url} alt={item.title}/>
                                 </li>
                             )
                         })}
                    </ul>
                </div>
            </div>
        )
    }
};
/*const SlidePhoto = React.createClass({
    propTypes:{
        data: React.PropTypes.array.isRequired
    },
    getInitialState: function(){
        return {
            index: 0
        }
    },
    getDefaultProps: function(){
        return {
            data:[]
        }
    },
    showPhoto: function(item, index){
        this.setState({
            index: index
        });
    },
    render: function(){
        return(
            <div style={{position:'relative'}}>
                <div className="cui-navContainer" style={{color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001'}}>
                    {this.props.data.map((item,key)=>{
                        return (
                            <span className={`cui-slide-nav-item ${key === this.state.index ? 'cui-slide-nav-item-current' : ''}`} key={key} onClick={this.showPhoto.bind(this, item, key)}></span>
                        )
                    })}
                </div>
                <div className="cm-slide cm-slide--full-img">
                     <ul className="cm-slide-list">
                         {this.props.data.map((item, key)=>{
                            return (
                                <li className="cm-slide-item" key={key}>
                                    <img src={item.url} alt={item.title}/>
                                </li>
                            )
                         })}
                     </ul>
                  </div>
            </div>
        )
    }
});*/
export default SlidePhoto;