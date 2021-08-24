import React from 'react' 
import './CovidInfo.css'
import {MapContainer, TileLayer} from 'react-leaflet'
import {showDataMap} from '../util'

const CovidInfo=({zoom, center,casesType, countries})=>{
    return (
      <div className='map'>
          <MapContainer zoom={zoom} center={center}>
            <TileLayer
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {showDataMap(countries, casesType )}
            
          </MapContainer>
      </div>
    )
}

export default CovidInfo