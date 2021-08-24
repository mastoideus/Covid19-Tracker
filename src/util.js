import React from 'react' 
import {Circle, Popup} from 'react-leaflet'



const casesTypeColors={
    cases:{
        hex:'#CC1034',
        multiplier:10000
    },
    recovered:{
        hex:'#7dd71d',
        multiplier:12000
    },
    deaths:{
        hex:'#fb4443',
        multiplier:14000
    }
}



export const showDataMap=(data, casesType='cases')=>
    data.map(country=>(
        <Circle
         center={[country.countryInfo.lat, country.countryInfo.long]}
         fillOpacity={0.4}
         color={casesTypeColors[casesType].hex}
         fillColor={casesTypeColors[casesType].hex}
         radius={
             Math.sqrt(country[casesType]*casesTypeColors[casesType].multiplier)
         }
        >
         <Popup>
             <div className='info-container'>
                 <div
                     className='info-flag'
                     style={{backgroundImage:`url(${country.countryInfo.flag})`}}
                 />
                 <div className='info-name'>
                     {country.country}
                 </div>
                 <div className='info-cases'>
                     Cases:{country.cases}
                 </div>
                 <div className='info-recovered'>
                     Recovered:{country.recovered}
                 </div>
                 <div className='info-deaths'>
                     Deaths:{country.deaths}
                 </div>
             </div>

         </Popup>
        </Circle>
    ))

