import React from 'react';
const SlidePhoto = React.createClass({
    getDefaultProps: function(){
        return {
            data:[]
        }
    },
    render: function(){
        return(
            <div>
                <div className="cui-navContainer">
                    {this.props.data.map((item,key)=>{
                        return (
                            <span className="cui-slide-nav-item" key={key}></span>
                        )
                    })}
                </div>
                <section>
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
                </section>
            </div>
        )
    }
});
export default SlidePhoto;