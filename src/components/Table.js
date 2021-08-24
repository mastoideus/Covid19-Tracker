import React from 'react'
import './Table.css' 
import {Card, CardContent} from '@material-ui/core'


const Table=({countries, title, titleColor, rowColor})=>{
  
   
  
    return (
      <Card>
          <CardContent>
            <div className='table'>
             <h3 className={`table__title ${titleColor}`}>{title}<span style={{color:'red', fontSize:'12px'}}> per Country</span></h3>
             {countries.map(country=>{
                 return <tr className={`table__row ${rowColor}`}>
                     <td className='table__rowCountry'>
                       {country.country}
                     </td>
                     <td>
                       {country.cases}
                     </td>
                 </tr>
             })}
             </div>
          </CardContent>
      </Card>
  )
}


export default Table 