import React, {Component} from 'react';
import Car from './Cars';
class Mycars extends Component {
    state={cars:["Ford", "Mercedes", "Peugeot"]}
render(){
   const {title}= this.props;
    return (
        <div className='cars'>
            <h1 style={{color:this.props.color}}>{title}</h1>
            
            <Car color="red">{this.state.cars[0]}</Car>
            <Car>Mercedes</Car>
            <Car color="green"></Car>
            

        </div>
    )
}
}

export default Mycars;