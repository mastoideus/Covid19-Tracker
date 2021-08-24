import React from 'react'
import './InfoBox.css'
import {Card, CardContent} from '@material-ui/core'


const InfoBox=(props)=>{
    
    
    return (
        <Card className='infoBox'>
            <CardContent>
               <div className='infoBox__content'>
          <h3 className='infoBox__title'>{props.title || 'Worldwide'}<span style={{color:'red', fontSize:'12px'}}> Statistics</span></h3>
         
             <div className='infoBox__row'>
                <p className='infoBox__subtitle'>Active cases</p>
                <strong>{props.active}</strong>
             </div>
              <div className='infoBox__row'>
                <p className='infoBox__subtitle'>Recovered</p>
                <strong>{props.recovered}</strong>
             </div>
              <div className='infoBox__row'>
                <p className='infoBox__subtitle'>Deaths</p>
                <strong>{props.deaths}</strong>
             </div>
              <div className='infoBox__row'>
                <p className='infoBox__total'>Total cases</p>
                <strong>{props.cases}</strong>
             </div> 
        </div>
            </CardContent>
        </Card>
       
    )
}


export default InfoBox 