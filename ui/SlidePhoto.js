import React from 'react';
import IScroll from 'iscroll';
class SlidePhoto extends React.Component{
    static propTypes = {
        data: React.PropTypes.array.isRequired
    }
    static defaultProps = {
        data: [],
        index: 0,
        sliceClick: ()=>{}
    }
    constructor(props){
        super(props);
        this.state = {
            index: this.props.index,
            width: null,
            height: null,
            show:'none'
        }
    }
    componentDidMount(){
        if(this.props.data.length > 1){
            let self = this;
            let img = new Image();
            img.src= this.props.data[0].url;
            img.onload = function(){
                self.setState({
                    width: img.width,
                    show: 'block'
                }, ()=>{
                    new IScroll(self.refs.wrapper, {
                        scrollX: true
                    })
                })
            }
        }
    }
    showPhoto(item, index){
        this.setState({
            index: index,
            show: 'show'
        });
    }
    render(){
        return(
            <div style={{position:'relative'}} data-type={this.state.showss}>
                <div className="cui-navContainer" style={{color: 'rgb(20, 145, 197)', position: 'absolute', bottom: '10px', zIndex: '3001',left: '50%',display:this.state.show}}>
                    {this.props.data.map((item,key)=>{
                        return (
                            <span className={`cui-slide-nav-item ${key === this.state.index ? 'cui-slide-nav-item-current' : ''}`} key={key}></span>
                        )
                    })}
                </div>
                <section >
                    <div className="cm-slide cm-slide--full-img" ref="wrapper">
                        <ul className="cm-slide-list" ref="wrapper" style={{width: this.state.width,overflow:'hidden'}}>
                         {this.props.data.map((item, key)=>{
                             return (
                                 <li className="cm-slide-item" key={key} onClick={this.showPhoto.bind(this, item, key)} style={{width: this.state.width}}>
                                     <img src={item.url} alt={item.title} onClick={this.props.sliceClick.bind(this, item)}/>
                                 </li>
                             )
                         })}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
};
export default SlidePhoto;