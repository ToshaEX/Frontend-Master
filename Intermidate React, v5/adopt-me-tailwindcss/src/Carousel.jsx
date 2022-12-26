/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React,{Component} from 'react'

class Carousel extends Component{

    state={active:0}

    static defaultProps={images:["http://pets-images.dev-apis.co/pets/none.jpg"]}

    handleIndexClick=(e)=>{
        this.setState({active:+e.target.dataset.index})
    }
    render(){
        const  { active }=this.state;
        const {images} =this.props;

        return (<div className="carousel">
            <img src={images[active]} alt="animal hero" />
            <div className="carousel-smaller">{
                images.map((photo,index)=>(

                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <img src={photo} 
                    data-index={index}
                    onClick={this.handleIndexClick} 
                    key={photo} 
                    className={index ===active? "active":""} 
                    alt="animal thumbnail"/>
                ))
            }</div>
        </div>)
    }
}

export default Carousel