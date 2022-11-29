import React, {Component} from 'react';

const Car = ({children, color})=>{
//const colorInfo=props.color?(<p>Couleur: {props.color}</p>):(<p>Couleur:Néant</p>);
let colorInfo="";
if(color){
    colorInfo=color;
}else{
    colorInfo="Néant";
}
return children ?(
    <div className='cars' style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
        <p>Marque: {children} </p>
        {colorInfo}
        {/* color? <p>Couleur:{color}</p>: <p>Couleur:Néant</p>*/}
        {/* <p>Couleur: {color? color:"Néant"}</p>*/}

    </div>
):  <div className='cars' style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
<p>Pas de données </p>
 
</div>
/*if(props.children){
    return (
        <div className='cars' style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
            <p>Marque: {props.children} </p>
            {colorInfo}
            {/* color? <p>Couleur:{color}</p>: <p>Couleur:Néant</p>}
            {/* <p>Couleur: {color? color:"Néant"}</p>}

        </div>
    )
}else{
    return (
        <div className='cars' style={{backgroundColor:'pink', width:'400px', padding:'10px', margin:'5px auto'}}>
            <p>Pas de données </p>
             
        </div>
    )}
*/
}

export default Car;